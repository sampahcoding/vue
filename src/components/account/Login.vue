<template>
  <div class="login">
    <div class="error" v-if="error === true">please enter valid username and password</div>
    <form @submit="submit">
      <fieldset>
        <label>Username</label>
        <input type="text" v-model="username">
      </fieldset>
      <fieldset>
        <label>Password</label>
        <input type="password" v-model="password">
      </fieldset>
      <fieldset>
        <button type="submit">Login</button>
        or <router-link to="/">Register</router-link>
      </fieldset>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      username: '',
      password: '',
      error: false
    }
  },
  created: function () {
  },
  methods: {
    submit: function (e) {
      e.preventDefault()
      this.progress = true
      this.reload = false
      this.no_result = false
      this.$http.post('https://reqres.in/api/login', {username: this.username, password: this.password})
        .then(function (response) {
          return new Promise((resolve, reject) => {
            setTimeout(() => {
              if (response.data.token) {
                this.$router.push('search')
              }
              this.error = false
            }, 2000)
          })
        }, function (err) {
          console.log(err.error)
          setTimeout(() => {
            this.error = true
          }, 1000)
        })
    }
  }
}
</script>
<style scoped>
fieldset {
  margin: 0 0 15px 0;
  padding: 0;
  border: none;
}
input {
  display: block;
  height: 30px;
  padding-left: 10px;
  border: 1px solid #42b983;
  border-radius: 5px;
  min-width: 200px;
  font-size: 14px;
}
.login {
  max-width: 200px;
  margin: 8em auto;
}

button {
  background: #42b983;
  font-size: 14px;
  padding: 7px 20px;
  border-radius: 6px;
  color: white;
  font-weight: bold;
  cursor: pointer;
}
.error {
  color: #e96900;
  margin-bottom: 2em;
}
button:focus {outline:0;}
</style>
