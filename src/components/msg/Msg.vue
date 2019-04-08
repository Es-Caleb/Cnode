<template>
    <div class="msg-list">
        <div class="msg-loading" v-show="loading"></div>
        <div class="no-msg" v-show="readMessages.length == 0">暂无消息</div>
        <ul>
            <li v-for="(item, index) of readMessages" :key="item.id">
                <div>
                    <router-link></router-link>
                    <span></span>
                    <router-link></router-link>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'Msg',

}
</script>


<style lang="scss">
@import "../../assets/scss/_variable.scss";

</style>


