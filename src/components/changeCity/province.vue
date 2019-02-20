<template>
    <div>
        <span class="name">按省份选择:</span>
        <my-select :list="provinceList" title="省份" :value="province" :showWrapperActive="provinceActive" @change_active="changeProvinceActive"
            @change="changeProvince" className="province" />
        <my-select :list="cityList" title="城市" :value="city" :showWrapperActive="cityActive" @change_active="changeCityActive"
            @change="changeCity" className="city" />
        <span>直接搜索:</span>
        <el-select v-model="searchWord" filterable remote reserve-keyword placeholder="请输入关键词" :remote-method="remoteMethod"
            :loading="loading">
            <el-option v-for="item in searchList" :key="item" :label="item" :value="item">
            </el-option>
        </el-select>
    </div>
</template>

<script>
import MySelect from './select.vue'
import api from '@/api/index.js'
export default {
    data() {
        return {
            provinceList: [],
            province: '省份',
            cityList: [],
            city: '城市',
            provinceActive: false,
            cityActive: false,
            searchList: [
                '山东', '甘肃', '江苏', '北京', '云南', '海南', '浙江', '上海', '天津', '陕西', '新疆', '贵州', '安徽', '澳门', '湖南', '河北', '香港', '辽宁', '四川', '宁夏', '吉林', '福建', '湖北', '广东', '重庆', '山西', '江西', '黑龙江', '青海', '河南', '台湾', '内蒙古', '西藏', '广西',
            ],
            searchWord: '',
            loading: false
        }
    },
    components: {
        MySelect
    },
    created() {
        api.getProvinceList().then(res => {
            this.provinceList = res.data.data.map((item) => {
                item.name = item.provinceName
                return item
            })
        })
    }
    , methods: {
        changeProvinceActive(flag) {
            this.provinceActive = flag
            if (flag) {
                this.cityActive = false
            }
        },
        changeCityActive(flag) {
            this.cityActive = flag
            if (flag) {
                this.provinceActive = false
            }
        },
        changeProvince(item) {
            this.province = item.name
            console.log(item)
            this.cityList = item.cityInfoList
        },
        changeCity(item) {
            this.city = item.name
            this.$store.dispatch('setPosition', item.name)
            this.$router.push({ name: 'index' })
        },
        remoteMethod(val) {
            console.log(val)
            // 请求后端接口
        },
    }
}
</script>

<style lang="scss">
@import "@/assets/css/changecity/iselect.scss";
</style>
