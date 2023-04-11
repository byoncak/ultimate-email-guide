<script setup>
import { ref, inject } from "vue";
import { collection, addDoc, query, where, getDocs } from 'firebase/firestore';
import { useRouter } from 'vue-router'


const db = inject("db");
const router = useRouter()

let firstName = ref("");
let email = ref("");

const consent = ref(false)
const showAlert = ref(false);
const alertMessage = ref("");

let closeAlert = () => {
    showAlert.value = false;
}

let handleSubmit = async () => {
  try {
    // Check if the name and email pair already exist
    const q = query(collection(db, 'waitlist'), where('email', '==', email.value));
    const querySnapshot = await getDocs(q);
    if (querySnapshot.size > 0) {
      // Display an alert message if a duplicate record was found
      firstName.value = "";
      email.value = "";
      showAlert.value = true;
      alertMessage.value = 'Oops. A record with this email already exists.';
    } else {
      // If no duplicate record was found and consent is given, add the new subscriber to Firestore
      const subscriber = {
        name: firstName.value,
        email: email.value,
        timestamp: Date.now(),
      };
      console.log("Trying to add subscriber to database...");

      await addDoc(collection(db, "waitlist"), subscriber);
      console.log("Subscriber added successfully!");
      console.log("Form submitted!");
      firstName.value = "";
      email.value = "";
    }
  } catch (error) {
    console.error("Error adding submission: ", error);
  }
};

let validateEmail = () => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (regex.test(email.value)) {
    showAlert.value = false;
    alertMessage.value = "";
    return true;
  } else {
    showAlert.value = true;
    alertMessage.value = "Please enter a valid email address";
    return false;
  }
};

let submitForm = () => {
  if (validateEmail() && consent.value) {
    handleSubmit();
    router.push({ name: 'ThankYou' })
  } else {
    alertMessage.value = 'Please give your consent to receive emails before submitting the form.'; // show error message
    showAlert.value = true;
  }
};
</script>

<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <div class="heading">
          <div class="meat">
            <!-- <h2>THE ONLY</h2> -->
            <h2>THE ULTIMATE</h2>

            <h1>
              EMAIL <br />
              GROWTH <br />
              GUIDE
            </h1>
            <!-- <h2>YOU NEED.</h2> -->
          </div>
          
          <p>Available Now!</p>
      </div>  
      
      <form @submit.prevent="submitForm">
        <div class="input-container">
          <font-awesome-icon class="i" icon="fa-regular fa-user" style="color: #ffffff;" />        
         
          <input
            type="text"
            id="first-name"
            v-model="firstName"
            required
            class="my-input"
            placeholder="First Name"
          />
        </div>
      
        <div class="input-container">
          <font-awesome-icon class="i" icon="fa-regular fa-envelope" style="color: #ffffff;" />        
          
          <input
            type="email"
            id="email"
            v-model="email"
            required
            class="my-input"
            placeholder="Email"
          />
        </div>
        
        <label class="opt-in">
          <input type="checkbox" v-model="consent" class="checkbox" />
        
          I agree to be sent helpful emails from you.
        </label>

        <button class="submit" type="submit">Gimme!</button>
      </form>
    
      <div v-if="showAlert" class="alert">
        <span>{{ alertMessage }}</span>
        
        <button @click="closeAlert" class="alert-close-btn">
          <font-awesome-icon icon="fa-solid fa-times" style="color: #ffffff;" />
        </button>
      </div>
    </div>
  </div>
</div>
</template>

<style lang="scss" scoped>
.alert {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 0.5rem;
  background-color: #4caf50;
  color: white;
  text-align: center;
  font-size: 1rem;
  font-weight: bold;
  z-index: 9999;
}

.alert-close-btn {
  position: absolute;
  top: 8px;
  right: 8px;
  border: none;
  background-color: transparent;
  color: white;
  cursor: pointer;
}

.container {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-top: 32px;
}

form {
  display: flex;
  flex-direction: column;
  row-gap: 8px;
  padding: 0;
  align-items: center;
  justify-content: center;
  margin-top: 32px;
}
.my-input {
  border: none;
  outline: none;
  padding: 0 3.5rem 0 3.5rem;
  margin: 0;
  font-family: inherit;
  line-height: inherit;
  width: 100%;
  max-width: 420px;
}

.input-container {
  position: relative;
  width: 100%;
}

input {
  color-scheme: dark;
}

.opt-in {
  display: inline-flex;
  align-items: center;
  color: white;
  width: 100%;
}

.checkbox {
  max-width: 23px;
  border: none;
  color: #3AE04B;
  margin: 0px 16px 0px 0px ;
}

.heading {
  text-align: left;
  margin-top: 23px;
}

.meat {
  margin: 8px 0 0px 0px;
  max-width: 420px; 
}

.submit {
  max-width: 420px;
  width: 100%;
  padding: 11px 11px 11px 11px;
  margin-top: 8px;
  border-radius: 64px;
  color: #232323;
  background-color: #3AE04B;
  font-weight: 800;
  font-size: 16px;
  transition: font-size 0.3s ease-in-out;

  cursor: pointer;
  &:hover {
    box-shadow:inset 0px 0px 10px 1px #defffa;
    transition: font-size 0.3s ease-in-out;
    font-size: 23px;
  }
}

.i {
  position: absolute;
  top: 50%;
  left: 10px;
  width: 16px;
  transform: translateY(-50%);
  font-size: 18px;
  color: #ccc;
  padding-left: 1rem;
}

label {
  font-size: 14px;
  padding: 0px;
}

  /* Small screens (up to 576px) */
  @media (max-width: 576px) {
    .container {
      max-width: 100%;
      padding: 8px 8px;
    }

    form {
      padding: 0;
    }

    .i {
      padding: 0px 0px 0px 23x;
    }

    .my-input {
      margin: 0 16px 0 4px;
    }

    input {
      font-size: 14px;
      width: 100%;
    }

    h1 {
      font-size: 40px;
    }

    p {
      font-size: 14px;
    }

    label {
      width: 100%;
      font-size: 11px;
    }

    .checkbox {
      margin: 0 8px 0 0;
      width: 16px;
    }
  }

  /* Medium screens (577px to 991px) */
  @media (min-width: 577px) and (max-width: 991px) {
    .container {
      max-width: 100%;
      padding: 0 1rem;
    }
  }

  /* Large screens (992px and up) */
  @media (min-width: 992px) {
    .container {
      max-width: 1170px;
      margin: 0 auto;
    }
  }
</style>
