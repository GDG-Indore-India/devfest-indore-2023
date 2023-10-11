export default {
  data () {
    return {
      title: ''
    }
  },
  created () {
    document.title = this.title + ' | Devfest Indore 2022'
  }
}