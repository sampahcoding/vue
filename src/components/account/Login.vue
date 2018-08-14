<template>
  <div class="login">
    <div class="error" v-if="error === true">please enter valid username and password</div>
    <form @submit="submit">
      <fieldset>
        <label>Username</label>
        <input type="text" v-model="username" :disabled="progress === true">
      </fieldset>
      <fieldset>
        <label>Password</label>
        <input type="password" v-model="password" :disabled="progress === true">
      </fieldset>
      <fieldset>
        <button type="submit" :disabled="progress === true">Login</button>
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
      error: false,
      progress: false
    }
  },
  methods: {
    submit: function (e) {
      e.preventDefault()
      Object.assign(this.$data, {progress: true})
      let self = this
      this.$http.post('https://reqres.in/api/login', {username: this.username, password: this.password})
        .then(function (response) {
          return new Promise((resolve, reject) => {
            setTimeout(() => {
              if (response.data.token) {
                return this.$router.push('search')
              }
              Object.assign(self.$data, {progress: false, error: false})
            }, 2000)
          })
        }, function (err) {
          console.log(err.error)
          setTimeout(() => {
            Object.assign(self.$data, {progress: false, error: true})
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
  position: relative;
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
