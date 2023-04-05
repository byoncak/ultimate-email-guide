<template>
  <div class="thank-you">
    <h1>Thank you for subscribing!</h1>
    
    <p> <br> Woooo! 🎉 <br>
      <br>
      THANKS so much for joining the Waitlist!<br>
      <br>
      I'll send you my Email Growth Guide <br>the second it's released! <br>
      <br>
      (April 10th) <br>
      <br>
      -Brett
    </p>
  </div>
</template>

<style scoped>
.thank-you {
  max-width: 600px;
  margin: 0 auto;
  text-align: left;
  padding: 48px;
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