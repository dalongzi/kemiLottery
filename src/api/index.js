import Vue from 'vue'

var api = {
  signin: "/signin", // 登录接口
  showAllPermission: "/system/permission/showAllPermission",  // 查询所有权限
  findAllRoles: "/system/role/findAllRoles",  // 查询所有的角色
  addNewRole: "/system/role/addNewRole",  // 新增角色
  deleteRole: "/system/role/deleteRole",  // 删除角色
  updateRoleInfo: "/updateRoleInfo",  // 编辑角色
  findAllUsers: "/system/user/findAllUsers",  // 获取所有的账号
  addNewUser: "/system/user/addNewUser",  // 新增用户
  deleteUser: "/system/user/deleteUser",  // 删除用户
  updateUserInfo: "/system/user/updateUserInfo",  // 更新用户
  addNewPersmission: "/system/permission/addNewPersmission",  // 新增权限
  deletePermission: "/system/permission/deletePermission",  // 删除权限,暂不能用
  findAllGames: "/gameManage/games/findAllGames", // 获取所有彩种
  addNewGame: "/gameManage/games/addNewGame", // 更新彩票列表
  findByGameName: "/gameManage/games/findByGameName", // 获取指点彩种的彩票信息
}

Vue.prototype.$api = api;

export default api