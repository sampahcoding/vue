<template>
  <div class="detail">
    <Placeholder v-if="progress === true"></Placeholder>
    <div class="no-result" v-if="reload === true || no_result === true">
      <Reload v-if="reload === true"></Reload>
      <div v-if="no_result === true">No Result detail id "{{ id }}"</div>
    </div>
    <div v-if="data.body !== ''">
      <h2> {{ data.title }} </h2>
      <p v-for="i in 2" :key="i">
        <template v-for="m in 5">
          {{ data.body + m }}
        </template>
      </p>
      <div class="detail__footer">
        <img :src="'https://picsum.photos/50/50/?image='+ id" align="top"/>
        <div class="detail__footer__left">
          <span class="label">expedita</span>
          <span class="label">consequuntur</span>
          <br>
          <time>4 days ago</time>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Placeholder from './DetailPlaceholder'
import Reload from './Reload'
export default {
  name: 'Detail',
  components: {
    'Placeholder': Placeholder,
    'Reload': Reload
  },
  data () {
    return {
      msg: 'Hai this is detail page',
      id: this.$route.params.id,
      data: {
        title: '',
        body: ''
      },
      progress: true,
      reload: false
    }
  },
  created: function () {
    this.getData()
  },
  methods: {
    getData: function (e) {
      this.progress = true
      this.reload = false
      this.no_result = false
      this.$http.get('https://jsonplaceholder.typicode.com/posts/' + this.id)
        .then(function (response) {
          return new Promise((resolve, reject) => {
            setTimeout(() => {
              this.data = response.data
              if (response.data.length === 0) {
                this.no_result = true
              }
              this.progress = false
            }, 2000)
          })
        }, function (error) {
          setTimeout(() => {
            console.log(error.status)
            if (error.status === 404) {
              this.no_result = true
            } else {
              this.reload = true
            }
            this.progress = false
          }, 1000)
        })
    },
    doReload: function () {
      this.getData()
    }
  }
}
</script>
<style scoped>
h2 {
  text-align: center;
}
p {
  text-align: justify;
}
.detail__footer img {
   border-radius: 50%;
   margin-right: 15px;
   width: 50px;
   background: lightgrey;
}
.detail__footer {
  margin-top: 40px;
  display: flex;
}
span.label {
  border: 1px solid #f4f6f9;
  border-radius: 6px;
  font-size: 11px;
  padding: 5px 15px;
  background: #f4f6f9;
  color: #b1b6bb;
  letter-spacing: 0.5px;
  font-weight: bold;
}
time {
  color: #99a4af;
  font-size: 10px;
}
.detail__footer__left {
  width: calc (100% - 50px);
}
.no-result {
  font-size: 1em;
  text-align: center;
  margin-top: 100px;
}
</style>
