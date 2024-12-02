/*
 * @Description: 
 * @Author: Rabbiter
 * @Date: 2023-03-08 20:38:49
 */
import VUE from 'vue'
import VUEX from 'vuex'

VUE.use(VUEX)

const state = {
  isPractice: false, //练习模式标志
  flag: false, //菜单栏左右滑动标志
  userInfo: null,
  menu: [
  {
    index: '1',
    title: '考试管理',
    icon: 'el-icon-a-061',
    content: [{ item2: '考试查询', path: '/selectExam', icon:"el-icon-a-042" }, { item3: '添加考试', path: '/addExam', icon:"el-icon-a-07" }],
  },
  {
    index: '2',
    title: '题库管理',
    icon: 'el-icon-a-011',
    content: [{ item2: '题目列表', path: '/selectAnswer', icon:"el-icon-a-041" }, { item3: '新增题目', path: '/addAnswer', icon:"el-icon-a-07" }, { path: '/addAnswerChildren' }],
  },
  {
    index: '3',
    title: '成绩查询',
    icon: 'el-icon-a-021',
    content: [{ item1: '学生成绩查询', path: '/allStudentsGrade', icon:"el-icon-a-042" }, { path: '/grade' }, { item2: '成绩分段查询', path: '/selectExamToPart', icon:"el-icon-a-042" }, { path: '/scorePart' }],
  },
  {
    index: '4',
    title: '学生管理',
    icon: 'el-icon-a-01',
    content: [{ item1: '学生管理', path: '/studentManage', icon:"el-icon-a-041" }, { item2: '添加学生', path: '/addStudent', icon:"el-icon-a-07" }],
  },
    // {
    //   index: '5',
    //   title: '教师管理',
    //   icon: 'icon-Userselect',
    //   content:[{item1:'教师管理',path:'/teacherManage'},{item2: '添加教师',path: '/addTeacher'}],
    // },
    // {
    //   index: '7',
    //   title: '模块管理',
    //   icon: 'icon-module4mokuai',
    //   content:[{item1:'模块操作',path:'/module'}],
    // }
  ],
}
const mutations = {
  practice(state, status) {
    state.isPractice = status
  },
  toggle(state) {
    state.flag = !state.flag
  },
  changeUserInfo(state, info) {
    state.userInfo = info
  }
}
const getters = {

}
const actions = {
  getUserInfo(context, info) {
    context.commit('changeUserInfo', info)
  },
  getPractice(context, status) {
    context.commit('practice', status)
  }
}
export default new VUEX.Store({
  state,
  mutations,
  getters,
  actions,
  // store
})
