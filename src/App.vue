<template>
  <div id="app">
    <img class='logo' alt="Cloud logo" src="./assets/logo.png">
    <h1>Регистрация клиента</h1>
    <div class="error">* - Поля обязательные для заполнения</div>
    <form @submit.prevent="someAction()">
      <Full 
        clientTittle = 'Данные клиента'
        addressTittle = 'Адрес клиента'
        documentsTittle = 'Паспортные данные'
        @change-page = 'changePage'
      />
    </form>

  </div>
</template>

<script>
import Full from './components/Full';

export default {
  name: 'App',

  components: {
    Full
  },

  methods: {
    changePage(ActiveCss, HideCss) {
      const active = document.querySelector(ActiveCss),
            hide = document.querySelector(HideCss);

        active.classList.remove('disabled');
        hide.classList.add('disabled');

    },
    someAction() {
      alert('Форма отправлена');
    }
  }
}
</script>

<style lang="scss">
body {
  background-image: url('./assets/bg-cloud.jpg');

  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: black;
    background: white;
    margin: 40px auto 0;
    border-radius: 20px;
    box-shadow: 0 0 10px 2px #ccc;
    padding: 20px;
  

    .logo {
      width: 100px;
    } 
  }
}

.row {
  display: flex;
  justify-content: center;
}

.col {
  margin: 0 20px 15px;
}

.form-input {
  @extend %style_border;
  padding: 10px;
}

.error {
  display: block;
  font-size: 10px;
  color: $error;
  font-style: italic;
}

input:hover, 
input:focus,
select:hover,
select:focus {
  box-shadow: 0 0 10px 0 #204a79;
}

button:hover,
button:focus {
  background: #204a79;
  color: white;
}

.btn-forward,
.btn-back {
  background: white;
}

.btn-submit {
  background: green;
  color: white;
}

.btn-submit:hover,
.btn-submit:focus {
  background: #005500;
}

.btn-submit:disabled {
  background: gray !important;
}

.title {
  display: block;
  margin: 5px 0 10px;
}

.active {
  display: block;
}

.disabled {
  display: none;
}

.select {
  @extend %style_border;
  background: #fff url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='4' height='5' viewBox='0 0 4 5'%3e%3cpath fill='%23343a40' d='M2 0L0 2h4zm0 5L0 3h4z'/%3e%3c/svg%3e") no-repeat right .75rem center/8px 10px;
  appearance: none;
  padding: 5px 15px;
}

.multi-select {
  @extend %style_border;
  padding: 5px 15px;
}

.btn {
  @extend %style_border;
  padding: 5px 30px;
}

.control {
  display: flex;
  margin: 0 30px 15px;
}
.space {
  flex-grow: 1;
}

.client-data {
  .form-input {
    width: 150px;
  }

  .gender {
    .form-input {
      width: auto !important;
    }
  }
}

.address {
  .row {
    flex-direction: column;
  }

  .form-input {
    width: 500px;
  }
}

.documents {
  .form-input,
  .col {
    width: 250px;
  }

  .row {
    flex-wrap: wrap;
  }
}

@media (min-width: 601px) {
  #app {
    width: 600px;
  }
}

@media (max-width: 600px) {
  #app {
    width: 85%;

    .row {
      flex-wrap: wrap;
    }

    .form-input {
      width: 250px;
    }

    .btn {
      padding: 10px 0;
    }

    .btn-back, 
    .btn-forward {
      width: 100px;
    }

    .btn-submit {
      width: 250px;
    }
  }
}
</style>
