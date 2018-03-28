module.exports = {
	apiList : [
		{
			api:'index/member/sendMobileCode',//发送短信验证码
		},
		{
			api:'index/member/register',//注册
		},
		{
			api:'index/member/login',//登录
		},
		{
			api:'index/member/forgotPassword',//忘记密码， token source_password new_password new_passwords
		},
		{
			api:'index/member/getMemberAssets',//我的资产 token  
		},
		{
			api:'index/member/getMemberRank',//排行榜 token  
		},
		{
			api:'index/member/getMemberAssetsList',//收支记录 token   asset_type（查询类型：1.查询资产 2.查询阳光值	） page (页数,第一页为0 ) page_size 默认为5
		}
	] 
}
