<template>
    <section>
        <div class="index-section">
            <!-- 导航 -->
            <nav class="nav">
                <router-link to="/" :class="{active: $route.query.tab == 'all' || !$route.query.tab }" >全部</router-link>
                <router-link to="/?tab=good" :class="{active: $route.query.tab == 'good' }" >精华</router-link>
                <router-link to="/?tab=share" :class="{active: $route.query.tab == 'share' }" >分享</router-link>
                <router-link to="/?tab=ask" :class="{active: $route.query.tab == 'ask' }" >问答</router-link>
                <router-link to="/?tab=job" :class="{active: $route.query.tab == 'job' }" >招聘</router-link>
                <router-link to="/?tab=dev" :class="{active: $route.query.tab == 'dev' }" >客户端测试</router-link>
            </nav>

            <div class="topics-list">
                <div class="mark-box" v-show="mark">
                    <div class="mark-line"></div>                    
                    <div class="mark-line"></div>
                    <div class="mark-line"></div>
                </div>
                <List :topics = "topics"/>
            </div>

            <div class="pagination-box">
                <page
                    :total="total"
                    :page-size="40"
                    :current.sync="page"
                    @on-change="currentChange"
                ></page>
            </div>

        </div>
        <Sidebar />
    </section>
</template>

<script>
export default {
    
}
</script>

<style lang="scss">
@import "@/assets/scss/_variable.scss";


</style>



