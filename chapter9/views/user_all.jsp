<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="utf-8" %>
<%@ include file="/jsp/basePath.jsp" %>
<script type='text/template' id='user_all'>
<div class="common_pad case_all">
<div class="notice_query"><span>所有用户</span><!--<a href="javascript:;">新建</a>--></div>
<div class="notice_manage_time">
<div class="common_show_time common_show_time_change">
<div class="common_show_txt">用户名</div>
<div class="common_type_input"><input class="js_user_all_name" type="text"></div>
<div class="common_show_txt">申请状态</div>
<div class="common_show_select"><select><option data-key='0'>全部</option><option data-key='1'>待审核</option><option
data-key='2'>审核通过</option></select><div class="common_select_write user_sele_name" >全部</div></div>
<a class="common_more_txt js_logs_high" href="javascript:;">高级</a>


<div class="common_show_btn">
<a href="javascript:;" class="common_btn_search js_btn_user_all"><span>查询</span></a>
<a href="javascript:;" class="common_btn_reset js_btn_user_all_resect"><span>重置</span></a>

</div>

<!--<div class="common_create_pad">
<a href="javascript:;" class="common_btn_create"><span>邀请</span></a>
</div>-->
</div>


</div>


<div class="common_release_frame">
<div class="common_release_men" style="display: none;">
<div class="common_show_txt">申请时间</div>
<div class="common_show_input"><div class="common_data_icon"><input class="" id="start" type="text"
onClick="laydate({istime: true, format: 'YYYY-MM-DD hh:mm:ss'})"><div class="common_data_right"><img
src="<%=basePath%>images/system/system_notice_data.png"></div></div></div>
<div class="common_show_txt">至</div>
<div class="common_show_input"><div class="common_data_icon"><input class="" id="end" type="text"
onClick="laydate({istime: true, format: 'YYYY-MM-DD hh:mm:ss'})"><div class="common_data_right" ><img
src="<%=basePath%>images/system/system_notice_data.png"></div></div></div>

</div>

<div class="common_line_bottom">
<div class="common_line_arr"></div>
</div>


</div>


<div class="common_table">

<div class="common_card_middle">
<div class="common_card_middlel"></div>
<div class="common_card_middlem"></div>
<div class="common_card_middler"></div>
</div>


<div class="common_table_frame">
<table class="common_table_all">
<tbody class="common_table_tbody js_user_table">
<tr class="common_tr_head">
<th class="common_td_head cur"><p>用户名</p></th>
<th class="common_td_head cur"><p>申请人邮箱</p></th>
<th class="common_td_head cur"><p>申请时间</p></th>
<th class="common_td_head cur"><p>申请状态</p></th>

<th class="common_td_head cur"><p>拥有角色</p></th>
<th class="common_td_head cur"><p>操作</p></th>

</tr>


</tbody>
</table>
</div>


<div class="common_card_foot">
<div class="common_card_footl"></div>
<div class="common_card_footm"></div>
<div class="common_card_footr"></div>
</div>


</div>


<div class="common_page">
<div class="common_page_go">

<input type="text">
<a href="javascript:;" class='argumentgo'>GO</a>

</div>

<ul class="page" maxshowpageitem="5" pagelistcount="5" id="userPage"></ul>

</div>


</div>
</script>
<script type='text/template' id='user_agent'>
<div class="common_pad user_agent">
<div class="notice_query"><span>所有用户</span><!--<a href="javascript:;">新建</a>--></div>
<div class="notice_manage_time">
<div class="common_show_time common_show_time_change">
<div class="common_show_txt">用户名</div>
<div class="common_type_input"><input class="js_user_agent_name" type="text"></div>
<div class="common_show_txt">用户状态</div>
<div class="common_show_select">
<select>
<option data-key='0'>全部</option>
<option data-key='2'>正常</option>
<option data-key='3'>冻结</option>
<option data-key='4'>注销</option>
</select>
<div class="common_select_write user_sele_agent_name" >全部</div>
</div>
<a class="common_more_txt js_logs_agent" href="javascript:;">高级</a>


<div class="common_show_btn">
<a href="javascript:;" class="common_btn_search js_btn_user_agent"><span>查询</span></a>
<a href="javascript:;" class="common_btn_reset js_btn_user_agent_resect"><span>重置</span></a>

</div>

<!--<div class="common_create_pad">
<a href="javascript:;" class="common_btn_create"><span>邀请</span></a>
</div>-->
</div>


</div>


<div class="common_release_frame">
<div class="common_release_men" style="display: none;">
<div class="common_show_txt">申请时间</div>
<div class="common_show_input"><div class="common_data_icon"><input class="" id="startagent" type="text"
onClick="laydate({istime: true, format: 'YYYY-MM-DD hh:mm:ss'})"><div class="common_data_right"><img
src="<%=basePath%>images/system/system_notice_data.png"></div></div></div>
<div class="common_show_txt">至</div>
<div class="common_show_input"><div class="common_data_icon"><input class="" id="endagent" type="text"
onClick="laydate({istime: true, format: 'YYYY-MM-DD hh:mm:ss'})"><div class="common_data_right" ><img
src="<%=basePath%>images/system/system_notice_data.png"></div></div></div>

</div>

<div class="common_line_bottom">
<div class="common_line_arr"></div>
</div>


</div>


<div class="common_table">

<div class="common_card_middle">
<div class="common_card_middlel"></div>
<div class="common_card_middlem"></div>
<div class="common_card_middler"></div>
</div>


<div class="common_table_frame">
<table class="common_table_all">
<tbody class="common_table_tbody js_user_agent">
<tr class="common_tr_head">
<th class="common_td_head cur"><p>在线状态</p></th>
<th class="common_td_head cur"><p>用户状态</p></th>
<th class="common_td_head cur"><p>用户名</p></th>
<th class="common_td_head cur"><p>申请人邮箱</p></th>
<th class="common_td_head cur"><p>申请时间</p></th>
<th class="common_td_head cur"><p>申请状态</p></th>

<th class="common_td_head cur"><p>拥有角色</p></th>
<th class="common_td_head cur"><p>操作</p></th>

</tr>


</tbody>
</table>
</div>


<div class="common_card_foot">
<div class="common_card_footl"></div>
<div class="common_card_footm"></div>
<div class="common_card_footr"></div>
</div>


</div>


<div class="common_page">
<div class="common_page_go">

<input type="text">
<a href="javascript:;" class='useragentgo'>GO</a>

</div>

<ul class="page" maxshowpageitem="5" pagelistcount="5" id="userPageagent"></ul>

</div>


</div>
</script>
<script type="text/template" id="user_all_a">


<div class="pop_con">
<div class="pop_reall">
<h3 class="pop_reject">请输入驳回理由:</h3>
<div class="pop_rjctarea">
<textarea>非企业员工，不得申请进入本企业开发云</textarea>
</div>
</div>
</div>
<div class="pop_rejectBtn">
<a href="javascript:;" class="relego">确定</a>
<a href="javascript:;" class="cancel">取消</a>
</div>
</script>
<script type="text/template" id="user_all_agent">


<div class="pop_con">
<div class="pop_reall">
<h3 class="pop_reject">请输入驳回理由:</h3>
<div class="pop_rjctarea">
<textarea>非企业员工，不得申请进入本企业开发云</textarea>
</div>
</div>
</div>
<div class="pop_rejectBtn">
<a href="javascript:;" class="relego relegoagent">确定</a>
<a href="javascript:;" class="cancel">取消</a>
</div>
</script>
<script type="text/template" id="user_all_logout">
<div class="pop_con">
<div class="pop_reall">
<div class="pop_removePeople">
<p>确认注销该用户吗？</p>
</div>
</div>
</div>
<div class="pop_rejectBtn">
<a href="javascript:;" class="relego relegoagent">确定</a>
<a href="javascript:;" class="cancel">取消</a>
</div>
</script>
<script type="text/template" id="user_all_unlock">
<div class="pop_con">
<div class="pop_reall">
<div class="pop_removePeople">
<p>确认解锁该用户吗？</p>
</div>
</div>
</div>
<div class="pop_rejectBtn">
<a href="javascript:;" class="relego relegoagent">确定</a>
<a href="javascript:;" class="cancel">取消</a>
</div>
</script>
<script type="text/template" id="user_all_b">


<div class="pop_con">
<div class="pop_reall">
<div class="pop_removePeople">
<p>确定删除角色 XXX 吗？</p>
</div>
</div>
</div>
<div class="pop_releaseBtn">
<a href="javascript:;" class="relego">确定</a>
<a href="javascript:;" class="cancel">取消</a>
</div>
</script>

<script type="text/template" id="user_all_c">
<div class="pop_con borders_bottom_none">
<div class="common_edit_frame">

<div class="common_edit_content borders_bottom_none">
<div class="common_edit_list">
<div class="common_edit_txt">角色分类</div>
<div class="common_edit_select">
<select class='js_sele_user_temp1'></select>
<div class="common_edit_write js_sele_user_temp_project">租户</div>
</div>
</div>
<div class="common_edit_list js_second_sele_project">
<div class="common_edit_txt">项目选择</div>
<div class="common_edit_select">
<select class='js_sele_user_temp2'></select>
<div class="common_edit_write js_sele_user_temp_project2">请点击选择您的项目</div>
</div>
</div>
</div>

<div class="pop_morepop pop_morepop_change">
<p>分配角色<span class='js_checkbox_span'>(可多选)</span></p>
<table>
<tbody>
<tr class='js_checkbox_user hide'>
<td>
<input type="checkbox" id="pop11" data-key='租户管理员' data-id='2'/>
<label for="pop11">租户管理员</label>
</td>
<td>
<input type="checkbox" id="pop12" data-key='普通用户' data-id='7'/>
<label for="pop12">普通用户</label>
</td>
<td>
<input type="checkbox" id="pop13" data-key='领导' data-id='8'/>
<label for="pop13">领导</label>
</td>
</tr>
<tr class='js_checkbox_project hide'>
<td>
<input type="radio" id="pop11" data-key='项目管理员' name='radios' data-id='3'/>
<label for="pop11">项目管理员</label>
</td>
<td>
<input type="radio" id="pop12" data-key='开发人员' name='radios' data-id='4'/>
<label for="pop12">开发人员</label>
</td>
<td>
<input type="radio" id="pop13" data-key='测试人员' name='radios' data-id='5'/>
<label for="pop13">测试人员</label>
</td>
<td>
<input type="radio" id="pop14" data-key='运营维护人员' name='radios' data-id='6'/>
<label for="pop14">项目配置员</label>
</td>
</tr>
</tbody>
</table>
</div>
<div class="pop_rejectBtn">
<a href="javascript:;" class="relego js_click_update" >完成</a>
<a href="javascript:;" class="cancel">取消</a>
</div>
</div>
</div>
</script>
<!--编辑-->
<script type="text/template" id="user_all_pop_edit">
    <div class="pop_con">
        <div class="common_edit_frame">
            <div class="common_edit_content">
                <div class="common_edit_list">
                    <div class="common_edit_txt">用户组名</div>
                    <div class="common_edit_select">
                        <select><option>123</option><option>123</option></select>
                        <div class="common_edit_write">全部</div>
                    </div>
                </div>
                <div class="common_edit_list">
                    <div class="common_edit_txt">角色分类</div>
                    <div class="common_edit_input">
                        <input type="text" placeholder="二级企业管理员"/>
                    </div>
                </div>
                <div class="common_edit_list_change">
                    <div class="common_edit_txt">描述</div>
                    <div class="common_edit_textarea">
                        <div class="common_edit_all">
                            <textarea placeholder="负责企业旗下所有项目相关人员的增删改查"></textarea>
                        </div>
                    </div>
                </div>
            </div>
            <div class="common_edit_btn">
                <a href="javascript:;">确定</a>
            </div>
        </div>
    </div>
</script>
<script type="text/template" id="user_check">
    <div class="common_pad case_check hide">
        <div class="notice_query"><span>待审核</span></div>
        <div class="notice_manage_time">
            <div class="common_show_time common_show_time_change">
                <div class="common_show_txt">用户名</div>
                <div class="common_type_input"><input class="js_user_shen_name" type="text"></div>
                <a class="common_more_txt hide" href="javascript:;">高级</a>
                <div class="common_show_btn">
                    <a href="javascript:;" class="common_btn_search js_btn_shen_all"><span>查询</span></a>
                    <a href="javascript:;" class="common_btn_reset js_btn_shen_all_resect"><span>重置</span></a>
                </div>
            </div>
        </div>
        <div class="common_release_frame">
            <div class="common_release_men" style="display: none;">
                <div class="common_show_txt">申请时间</div>
                <div class="common_show_input">
                    <div class="common_data_icon">
                        <input class="" id="start1" type="text" onClick="laydate({istime: true, format: 'YYYY-MM-DD hh:mm:ss'})">
                        <div class="common_data_right"><img src="<%=basePath%>images/system/system_notice_data.png"></div>
                    </div>
                </div>
                <div class="common_show_txt">至</div>
                <div class="common_show_input">
                    <div class="common_data_icon">
                        <input class="" id="end1" type="text" onClick="laydate({istime: true, format: 'YYYY-MM-DD hh:mm:ss'})">
                        <div class="common_data_right"><img src="<%=basePath%>images/system/system_notice_data.png"></div>
                    </div>
                </div>
            </div>
            <div class="common_line_bottom">
                <div class="common_line_arr"></div>
            </div>
        </div>
        <div class="common_table">
            <div class="common_card_middle">
                <div class="common_card_middlel"></div>
                <div class="common_card_middlem"></div>
                <div class="common_card_middler"></div>
            </div>
            <div class="common_table_frame">
                <table class="common_table_all">
                    <tbody class="common_table_tbody js_table_examine">
                        <tr class="common_tr_head">
                            <th class="common_td_head cur"><p>用户名</p></th>
                            <th class="common_td_head cur"><p>申请人邮箱</p></th>
                            <th class="common_td_head cur"><p>申请时间</p></th>
                            <th class="common_td_head cur"><p>申请状态</p></th>
                            <th class="common_td_head cur"><p>拥有角色</p></th>
                            <th class="common_td_head cur"><p>操作</p></th>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="common_card_foot">
                <div class="common_card_footl"></div>
                <div class="common_card_footm"></div>
                <div class="common_card_footr"></div>
            </div>
        </div>
        <div class="common_page">
            <div class="common_page_go">
                <input type="text">
                <a href="javascript:;" class='usergo'>GO</a>
            </div>
            <ul class="page" maxshowpageitem="5" pagelistcount="7" id="examinePage"></ul>
        </div>
    </div>
</script>
<script type="text/template" id="user_manage">
    <div class="common_pad case_manage hide">
        <div class="notice_query"><span>用户组管理</span></div>
        <div class="notice_manage_time">
            <div class="common_show_time">
                <div class="common_show_txt">用户组名</div>
                <div class="common_type_input"><input class="" type="text"></div>
                <div class="common_show_txt">关键字描述</div>
                <div class="common_type_input"><input class="" type="text"></div>
                <div class="common_show_btn">
                    <a href="javascript:;" class="common_btn_search"><span>查询</span></a>
                    <a href="javascript:;" class="common_btn_reset"><span>重置</span></a>
                </div>
            </div>
        </div>
        <div class="common_table">
            <div class="common_card_middle">
                <div class="common_card_middlel"></div>
                <div class="common_card_middlem"></div>
                <div class="common_card_middler"></div>
            </div>
            <div class="common_table_frame">
                <table class="common_table_all">
                    <tbody class="common_table_tbody">
                        <tr class="common_tr_head">
                            <th class="common_td_head cur"><p>序号</p></th>
                            <th class="common_td_head cur"><p>用户组名</p></th>
                            <th class="common_td_head cur"><p>描述</p></th>
                            <th class="common_td_head cur"><p>创建时间</p></th>
                            <th class="common_td_head cur"><p>操作</p></th>
                        </tr>
                        <tr class="common_tr_head">
                            <td class="common_td_body">1</td>
                            <td class="common_td_body">美术组</td>
                            <td class="common_td_body">所有项目相关人员的增删改查</td>
                            <td class="common_td_body">2016-12-12 12:12:12</td>
                            <td class="common_td_body">
                                <div class="common_td_edit"></div>
                                <div class="common_td_manage"></div>
                                <div class="common_td_trash"></div>
                            </td>
                        </tr>
                        <tr class="common_tr_head">
                            <td class="common_td_body">2</td>
                            <td class="common_td_body">原型组</td>
                            <td class="common_td_body">系统测试，编制测试用例，提交测试缺陷</td>
                            <td class="common_td_body">2016-12-12 12:12:12</td>
                            <td class="common_td_body"><div class="common_td_edit"></div><div class="common_td_manage"></div><div
                            class="common_td_trash"></div></td>
                        </tr>
                        <tr class="common_tr_head">
                            <td class="common_td_body">3</td>
                            <td class="common_td_body">前端开发组</td>
                            <td class="common_td_body"><p>租户系统超级用户，可以管理所属租户</p><p>的用户和权限,进行系统运行配置</p></td>
                            <td class="common_td_body">2016-12-12 12:12:12</td>
                            <td class="common_td_body">
                                <div class="common_td_edit"></div>
                                <div class="common_td_manage"></div>
                                <div class="common_td_trash"></div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="common_card_foot">
                <div class="common_card_footl"></div>
                <div class="common_card_footm"></div>
                <div class="common_card_footr"></div>
            </div>
        </div>

        <div class="common_page">
            <div class="common_page_go">
                <input type="text">
                <a href="javascript:;">GO</a>
            </div>
            <a herf="javascript:;">末页</a>
            <a herf="javascript:;">下一页</a>
            <a herf="javascript:;">5</a>
            <a herf="javascript:;">4</a>
            <a herf="javascript:;">3</a>
            <a herf="javascript:;">2</a>
            <a herf="javascript:;" class="cur">1</a>
            <span herf="javascript:;">共5页</span>
        </div>
    </div>
</script>
<script type="text/template" id="user_manage_pop_edit">
    <div class="pop_con">
        <div class="common_edit_frame">
            <div class="common_edit_content">
                <div class="common_edit_list">
                    <div class="common_edit_txt">用户组名</div>
                    <div class="common_edit_select">
                        <select>
                            <option>123</option>
                            <option>123</option>
                        </select>
                        <div class="common_edit_write">全部</div>
                    </div>
                </div>
                <div class="common_edit_list">
                    <div class="common_edit_txt">角色分类</div>
                    <div class="common_edit_input">
                        <input type="text" placeholder="二级企业管理员"/>
                    </div>
                </div>
                <div class="common_edit_list_change">
                    <div class="common_edit_txt">描述</div>
                    <div class="common_edit_textarea">
                        <div class="common_edit_all">
                            <textarea placeholder="负责企业旗下所有项目相关人员的增删改查"></textarea>
                        </div>
                    </div>
                </div>
            </div>
            <div class="common_edit_btn">
                <a href="javascript:;">确定</a>
            </div>
        </div>
    </div>
</script>
<script type='text/template' id='user_all_template'>
    <tr class="common_tr_head js_append_json">
        <td class="common_td_body">{{name}}</td>
        <td class="common_td_body">{{email}}</td>
        <td class="common_td_body">{{createTime}}</td>
        <td class="common_td_body">{{status}}</td>
        <td class="common_td_body">{{roleNames}}</td>
        <td class="common_td_body" data-tenantId={{tenantId}}>{{operation}}</td>
    </tr>
</script>
<script type='text/template' id='user_all_template_addTowFields'>
    <tr class="common_tr_head js_append_json">
        <td class="common_td_body">{{isLogin}}</td>
        <td class="common_td_body">{{userStatus}}</td>
        <td class="common_td_body">{{name}}</td>
        <td class="common_td_body">{{email}}</td>
        <td class="common_td_body">{{createTime}}</td>
        <td class="common_td_body">{{applyStatus}}</td>
        <td class="common_td_body">{{roleNames}}</td>
        <td class="common_td_body" data-tenantId={{tenantId}}>{{operation}}</td>
    </tr>
</script>
