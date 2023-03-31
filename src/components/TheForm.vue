<script setup>
import { ref, inject } from "vue";
import { collection, addDoc, query, where, getDocs } from 'firebase/firestore';

const db = inject("db");

let firstName = ref("");
let email = ref("");

const showAlert = ref(false);
const alertMessage = ref("");

let handleSubmit = async () => {
  try {
    // Check if the name and email pair already exist
    const q = query(collection(db, 'waitlist'), where('name', '==', firstName.value), where('email', '==', email.value));
    const querySnapshot = await getDocs(q);
    if (querySnapshot.size > 0) {
      // Display an alert message if a duplicate record was found
      showAlert.value = true;
      alertMessage.value = 'A record with this name and email already exists.';
    } else {
      // If no duplicate record was found, add the new subscriber to Firestore
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
      showAlert.value = true;
      alertMessage.value =
        "Successfully added to Waitlist. You will receive the guide as soon as it is released!";
        
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
  if (validateEmail()) {
    handleSubmit();
  }
};
</script>

<template>
  <div class="container">
    <div class="heading">
      <div class="meat">
        <!-- <h2>THE ONLY</h2> -->
        <p>THE ULTIMATE</p>

        <h1>
          EMAIL <br />
          AUTOMATION <br />
          GUIDE
        </h1>
        <!-- <h2>YOU NEED.</h2> -->
      </div>
      <p>Get INSTANT access April 23rd.</p>
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

      <button type="submit">Gimme!</button>
    </form>
    <div v-if="showAlert" class="alert">{{ alertMessage }}</div>
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
.container {
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
  padding: 0 100px 0 100px;
  align-items: center;
  justify-content: center;
  margin-top: 32px;
}
.my-input {
  border: none;
  outline: none;
  padding: 0 3.5rem 0 3.5rem;
  margin: 0;
  font-size: inherit;
  font-family: inherit;
  line-height: inherit;
}

input {
  color-scheme: dark;
  max-width: 420px;
}

.heading {
  text-align: left;
  margin-top: 23px;
}

.meat {
  margin: 8px 0 8px 0px;
  max-width: 420px;
}


button {
  max-width: 420px;
  width: 100%;
  padding: 11px 11px 11px 11px;
  margin-top: 23px;
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

.input-container {
  position: relative;
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
</style>
