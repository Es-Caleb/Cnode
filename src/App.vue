<template>
  <div id="xiejiahe">
		<div class="progress" :class="{actve: start, end: end}">
			<div class="rotate-loading"></div>
			<div class="progress-forward"></div>
		</div>
		<div class="go-top user-select-none" @click="goTop">
			<p>回</p>
			<p>顶</p>
			<p>部</p>
		</div>
		<div class="router-view">
			<Header />
			<keep-alive exclude="User,Collections,Messages,Release">
			  <router-view />
			</keep-alive>
			<Footer />
		</div>
  </div>
</template>

<script>
import Header from '@/components/header/Header'
import Footer from '@/components/footer/Footer'
export default {
  name: 'App',
  components: {
    Header,
    Footer,
  },
  data() {
    return {

    }
  },
  created() {

  },
  methods: {

  }
}
</script>
