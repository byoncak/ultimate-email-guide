<template>
  <div class="thank-you">
    <div class="container">
    <h1>Thank you for subscribing!</h1>
    
    <p> <br> Woooo! 🎉 <br>
      <br>
      THANKS so much for requesting my first ever e-book!<br>
      <br>
      Check your inbox for my Email Growth Guide <br> it's probably already there! <br>
      <br>
      (if not, don't forget to check your "Promotions" or "Spam" folders) <br>
      <br>
      -Brett
    </p>
  </div>

  <div class="social-icons">
    <a href="https://instagram.com/brettyoncak" target="_blank" rel="noopener">
      <font-awesome-icon class="i" icon="fa-brands fa-instagram" />
    </a>
    
    <a href="https://twitter.com/needmorejpegs" target="_blank" rel="noopener">
      <font-awesome-icon class="i" icon="fa-brands fa-twitter" />
    </a>
  </div>
</div>
</template>

<style scoped>
.thank-you {
  max-width: 600px;
  margin: 0 auto;
  text-align: left;
  padding: 48px;
}

.i {
  width: 16px;
  transform: translateY(-50%);
  font-size: 18px;
  color: #ccc;
  padding-left: 1rem;
}

h1 {
  font-size: 48px;
  font-weight: bold;
  margin-bottom: 24px;
  color: #3AE04B;
}

p {
  font-size: 24px;
  margin-bottom: 48px;
}

.social-icons {
  align-items: left;
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

    h1 {
      font-size: 48px;
    }

    p {
      font-size: 18px;
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