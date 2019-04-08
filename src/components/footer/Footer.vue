<template>
    <footer class="footer" v-pre>
        <div class="footer-box">
        <div class="source-code-add">
            <a href="https://github.com/LeoPoeX/Cnode">源码地址</a>
        </div>
        <div class="vendor">
            <ul>
            <li class="cnode">
                <span>CNode社区提供API</span>
                <a href="https://cnodejs.org/">
                <img
                    src="https://cnodejs.org/public/images/cnodejs.svg"
                    alt="cnode"
                />
                </a>
            </li>

            <li class="cnode">
                <span>github-pages提供网站托管</span>
                <a href="https://github.com/">
                <img src="/src/assets/images/github.svg" alt="github" />
                </a>
            </li>
            </ul>
        </div>
        </div>
    </footer>
</template>

<script>
export default {
    name: "Footer"
};
</script>

<style lang="scss">
@import "../../assets/scss/_variable.scss";
.footer {
    padding: 25px 0 35px 0;
    background: #fff;

    .footer-box {
        width: $width;
        margin: 0 auto;
    }

    .source-code-add {
        a:hover {
            color: #333;
            text-decoration: underline;
        }
    }

    .vendor {
        li {
            float: left;
            margin: 15px 30px 0 0;
        }
        span {
            margin-right: 10px;
            color: #666;
        }
        .cnode {
            img {
            width: 100px;
            @include user-select;
            }
        }   
    }
}
</style>
