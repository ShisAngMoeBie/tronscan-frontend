(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{1102:function(e,t,a){"use strict";a.d(t,"a",function(){return g});var n=a(15),r=a(16),c=a(25),l=a(23),s=a(24),o=a(0),i=a.n(o),d=a(155),u=a(14),m=a(3),g=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(c.a)(this,Object(l.a)(t).call(this,e))).state={open:!1,id:Object(d.a)(24)},a}return Object(s.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.open,n=t.id,r=this.props,c=r.text,l=r.placement,s=r.testSecond,o=void 0===s?"":s,d=r.className,g=void 0===d?"":d,p=r.info,E=void 0===p?"":p;return i.a.createElement("div",{className:"d-inline-block"},i.a.createElement("div",{className:"question-mark",id:n,onMouseOver:function(){return e.setState({open:!0})},onMouseOut:function(){return e.setState({open:!1})}},i.a.createElement("i",null,"?")),i.a.createElement(u.h,{placement:l,isOpen:a,target:n,className:g,innerClassName:"w-100"},c?Object(m.b)(c):"",o?i.a.createElement("span",null,i.a.createElement("br",null)," ",Object(m.b)(o)):"",E||""))}}]),t}(i.a.Component)},1106:function(e,t,a){"use strict";a.d(t,"a",function(){return k});var n=a(1126),r=a.n(n),c=a(131),l=a.n(c),s=a(1104),o=a.n(s),i=a(1109),d=a.n(i),u=a(2),m=a.n(u),g=a(8),p=a(5),E=a(15),f=a(16),A=a(25),h=a(23),b=a(24),I=a(0),v=a.n(I),B=a(3),C=a(18),k=function(e){function t(e){var a;return Object(E.a)(this,t),(a=Object(A.a)(this,Object(h.a)(t).call(this,e))).loadDatas=Object(p.a)(m.a.mark(function e(){var t,n,r,c,l=arguments;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=l.length>0&&void 0!==l[0]?l[0]:1,n=l.length>1&&void 0!==l[1]?l[1]:40,r=a.state.filter,e.next=5,C.a.getTokens(Object(g.a)({sort:"rank",limit:n,start:(t-1)*n},r));case 5:return c=e.sent,e.abrupt("return",c);case 7:case"end":return e.stop()}},e)})),a.handleTableChange=function(e,t,n){var r=Object(g.a)({},a.state.pagination);r.current=e.current,a.setState({pagination:r}),a.fetch(Object(g.a)({pageSize:e.pageSize,page:e.current,sortField:n.field,sortOrder:n.order},t))},a.fetch=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};a.setState({loading:!0}),a.props.onPageChange?(a.props.onPageChange(e.page,e.pageSize),a.setState({loading:!1})):a.setState({loading:!1})},a.onInputChange=function(e){a.setState({searchText:e.target.value})},a.onReset=function(){a.setState({searchText:""},function(){a.onSearch()})},a.onSearch=function(){var e=a.props.tableData,t=a.state.searchText,n=new RegExp(t,"gi");a.setState({filterDropdownVisible:!1,filtered:!!t,data:e.map(function(e){return e.name.match(n)?Object(g.a)({},e,{name:v.a.createElement("span",null,e.name.split(new RegExp("(?<=".concat(t,")|(?=").concat(t,")"),"i")).map(function(e,a){return e.toLowerCase()===t.toLowerCase()?v.a.createElement("span",{key:a,className:"highlight"},e):e}))}):null}).filter(function(e){return!!e})})},a.setColumn=function(e){function t(e){return function(t,a){return t[e]>a[e]?1:t[e]<a[e]?-1:0}}var n={filterDropdown:v.a.createElement("div",{className:"custom-filter-dropdown"},v.a.createElement(d.a,{ref:function(e){return a.searchInput=e},placeholder:"Search name",value:a.state.searchText,onChange:a.onInputChange,onPressEnter:a.onSearch}),v.a.createElement(o.a,{type:"primary",onClick:a.onSearch},Object(B.c)("search")),v.a.createElement(o.a,{className:"btn-secondary ml-1",onClick:a.onReset},Object(B.c)("reset"))),filterIcon:v.a.createElement(l.a,{type:"filter",style:{color:a.state.filtered?"#108ee9":"#aaa"}}),filterDropdownVisible:a.state.filterDropdownVisible,onFilterDropdownVisibleChange:function(e){a.setState({filterDropdownVisible:e},function(){a.searchInput&&a.searchInput.focus()})}},r=[],c=!0,s=!1,i=void 0;try{for(var u,m=e[Symbol.iterator]();!(c=(u=m.next()).done);c=!0){var p=u.value;if(p.sorter&&!p.filterDropdown){var E={sorter:t(p.key)};r.push(Object(g.a)({},p,E))}else if(!p.sorter&&p.filterDropdown){var f=Object(g.a)({},n);r.push(Object(g.a)({},p,f))}else if(p.sorter&&p.filterDropdown){var A=Object(g.a)({sorter:t(p.key)},n);r.push(Object(g.a)({},p,A))}else r.push(p)}}catch(h){s=!0,i=h}finally{try{c||null==m.return||m.return()}finally{if(s)throw i}}return r},a.state={filterDropdownVisible:!1,data:[],searchText:"",filtered:!1,pagination:{showQuickJumper:!0,position:e.position||"both",showSizeChanger:!0,defaultPageSize:20},loading:!1},a}return Object(b.a)(t,e),Object(f.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this.props,t=e.total,a=e.loading,n=e.data,c=e.column,l=e.bordered,s=e.pagination,o=void 0===s||s,i=e.scroll,d=e.locale,u=e.addr,m=e.transfers,p=(e.contractAddress,this.setColumn(c)),E=o?Object(g.a)({total:t},this.state.pagination):o;return v.a.createElement("div",null,u?v.a.createElement("div",{className:"card table_pos table_pos_addr "+(0==n.length?"table_pos_addr_data":"")+("address"==m?" transfer-mt-100":" transfer-pt-100")},v.a.createElement(r.a,{bordered:l,columns:p,rowKey:function(e,t){return t},dataSource:n,locale:d,scroll:i,pagination:E,loading:a,onChange:this.handleTableChange})," "):v.a.createElement("div",{className:"card table_pos"},v.a.createElement(r.a,{bordered:l,columns:p,rowKey:function(e,t){return t},dataSource:n,locale:d,scroll:i,pagination:E,loading:a,onChange:this.handleTableChange})))}}]),t}(I.Component)},2019:function(e,t){e.exports="data:image/png;base64,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"},3238:function(e,t,a){"use strict";a.r(t);var n=a(107),r=a.n(n),c=a(1137),l=a.n(c),s=a(2),o=a.n(s),i=a(199),d=a.n(i),u=a(5),m=a(15),g=a(16),p=a(25),E=a(23),f=a(24),A=a(0),h=a.n(A),b=a(32),I=a(20),v=a(3),B=a(12),C=a(19),k=a(6),Q=a(154),O=a(1106),y=a(82),S=a(1102),x=(a(21),a(18)),_=function(e){function t(){var e;return Object(m.a)(this,t),(e=Object(p.a)(this,Object(E.a)(t).call(this))).loadAccounts=Object(u.a)(o.a.mark(function t(){var a,n,r,c,l,s,i,u=arguments;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return a=u.length>0&&void 0!==u[0]?u[0]:1,n=u.length>1&&void 0!==u[1]?u[1]:20,e.setState({loading:!0}),t.next=5,x.a.getAccounts({sort:"-balance",limit:n,start:(a-1)*n});case 5:return r=t.sent,c=r.accounts,l=r.total,s=r.rangeTotal,t.next=11,x.a.getTagNameList();case 11:i=t.sent,c.map(function(e){e.tagName="",i.map(function(t){Object.keys(t.addressList).map(function(a){1==t.addressList[a].length?t.addressList[a][0]===e.address&&(e.tagName="".concat(d()(t.name)).concat("default"!==a?"-".concat(a):"")):t.addressList[a].length>1&&t.addressList[a].map(function(n,r){n===e.address&&(e.tagName="".concat(d()(t.name)).concat("default"!==a?"-".concat(a," ").concat(r+1):" ".concat(r+1)))})})})}),e.setState({loading:!1,accounts:c,total:l,rangeTotal:s});case 14:case"end":return t.stop()}},t)})),e.onChange=function(t,a){e.loadAccounts(t,a)},e.onSearchFieldChangeHandler=function(t){e.setState({searchString:t.target.value})},e.customizedColumn=function(){var t=e.props.intl;return[{title:d()(t.formatMessage({id:"address"})),dataIndex:"address",key:"address",align:"left",className:"ant_table",width:"40%",render:function(e,a,n){return 2==a.accountType?h.a.createElement("span",{className:"d-flex"},h.a.createElement(l.a,{placement:"top",title:t.formatMessage({id:"contracts"})},h.a.createElement("span",null,h.a.createElement("i",{className:"far fa-file mr-1"}))),h.a.createElement(C.a,{address:e,isContract:2==a.toAddressType})):h.a.createElement(C.a,{address:e})}},{title:"Name Tag",dataIndex:"tagName",key:"tagName",align:"left"},{title:d()(t.formatMessage({id:"supply"})),dataIndex:"balance",key:"supply",align:"left",className:"ant_table",render:function(e,t,a){return h.a.createElement("div",null,h.a.createElement(B.c,{value:parseInt(e)/k.w/k.g*100,minimumFractionDigits:8,maximumFractionDigits:8})," %")}},{title:d()(t.formatMessage({id:"power"})),dataIndex:"power",key:"power",align:"center",render:function(e,t,a){return h.a.createElement(B.c,{value:parseInt(e)/k.w})}},{title:d()(t.formatMessage({id:"balance"})),dataIndex:"balance",key:"balance",align:"right",className:"ant_table",render:function(e,t,a){return h.a.createElement(Q.b,{amount:parseInt(e)/k.w})}}]},e.state={loading:!0,searchString:"",accounts:[],total:0,exchangeFlag:[{name:"binance",addressList:{Cold:["TMuA6YqfCeX8EhbfYEg5y7S4DqzSJireY9","TWd4WrZ9wn84f5x1hZhL4DHvk738ns5jwb"],Hot:["TAUN6FwrnwwmaEqYcckffC7wYmbaS6cBiX"]}}]},e}return Object(f.a)(t,e),Object(g.a)(t,[{key:"componentDidMount",value:function(){this.loadAccounts()}},{key:"componentDidUpdate",value:function(){}},{key:"filteredAccounts",value:function(){var e=this.props.accounts,t=this.state.searchString;return(t=t.toUpperCase()).length>0&&(e=r()(e,function(e){return-1!==e.address.toUpperCase().indexOf(t)})),e}},{key:"renderAccounts",value:function(){var e=this.state.accounts;if(0!==e.length)return h.a.createElement(A.Fragment,null,h.a.createElement("div",{className:"table-responsive"},h.a.createElement("table",{className:"table table-striped m-0"},h.a.createElement("thead",{className:"thead-dark"},h.a.createElement("tr",null,h.a.createElement("th",null,Object(v.c)("address")),h.a.createElement("th",{className:"d-md-table-cell"},Object(v.c)("supply")),h.a.createElement("th",{className:"d-md-table-cell"},Object(v.c)("power")),h.a.createElement("th",null,Object(v.c)("balance")))),h.a.createElement("tbody",null,e.map(function(e,t){return h.a.createElement("tr",{key:e.address},h.a.createElement("th",null,h.a.createElement(C.a,{address:e.address})),h.a.createElement("td",{className:"d-md-table-cell text-nowrap"},h.a.createElement(B.c,{value:e.balance/k.w/k.g*100,minimumFractionDigits:8,maximumFractionDigits:8})," %"),h.a.createElement("td",{className:"text-nowrap d-md-table-cell"},h.a.createElement(B.c,{value:e.power/k.w})),h.a.createElement("td",{className:"text-nowrap"},h.a.createElement(Q.b,{amount:e.balance/k.w})))})))))}},{key:"render",value:function(){var e=this,t=this.props,a=(t.match,t.intl),n=this.state,r=n.total,c=n.loading,l=n.rangeTotal,s=void 0===l?0:l,o=n.accounts,i=this.customizedColumn(),d=(a.formatMessage({id:"view_total"}),a.formatMessage({id:"account_unit"}),a.formatMessage({id:"table_info_big"}),a.formatMessage({id:"view_total"})+" "+s+" "+a.formatMessage({id:"table_info_account_tip2"}));return h.a.createElement("main",{className:"container header-overlap pb-3 token_black"},h.a.createElement("div",{className:"row"},h.a.createElement("div",{className:"col-md-12"},h.a.createElement("div",{className:"card h-100 text-center widget-icon accout_unit"},h.a.createElement("div",{className:"card-body"},h.a.createElement("h3",{className:"text-primary"},h.a.createElement(B.c,{value:s})),Object(v.c)("total_accounts"))))),c&&h.a.createElement("div",{className:"loading-style"},h.a.createElement(y.b,null)),h.a.createElement("div",{className:"row mt-2"},h.a.createElement("div",{className:"col-md-12 table_pos"},r?h.a.createElement("div",{className:"table_pos_info d-none d-md-block",style:{left:"auto"}},h.a.createElement("div",null,Object(v.c)("view_total")," ",s," ",Object(v.c)("account_unit")," ",h.a.createElement(S.a,{placement:"top",info:d})," ",h.a.createElement("br",null),s>1e4?h.a.createElement("span",null,"(",Object(v.c)("table_info_big1"),"10000",Object(v.c)("table_info_big2"),")"):"")):"",h.a.createElement(O.a,{bordered:!0,loading:c,column:i,data:o,total:r,onPageChange:function(t,a){e.loadAccounts(t,a)}}))))}}]),t}(A.Component);var w={loadAccounts:I.r};t.default=Object(b.connect)(function(e){return{accounts:e.app.accounts}},w)(Object(B.h)(_))},3271:function(e,t,a){"use strict";a.r(t);var n,r=a(1126),c=a.n(r),l=a(199),s=a.n(l),o=a(34),i=a.n(o),d=a(2),u=a.n(d),m=a(8),g=a(5),p=a(15),E=a(16),f=a(25),A=a(23),h=a(24),b=a(1109),I=a.n(b),v=a(0),B=a.n(v),C=a(32),k=a(20),Q=a(3),O=a(12),y=a(19),S=a(6),x=a(154),_=a(1106),w=a(82),H=(a(1102),a(21),a(18)),j=a(14),N=a(44),D=a(156),L=Object(C.connect)(function(e){return{account:e.app.account,wallet:e.app.wallet,tokenBalances:e.account.tokens,trxBalance:e.account.trxBalance||e.account.balance}},{reloadWallet:N.c})(n=Object(O.h)(n=Object(D.a)(n=function(e){function t(e){var a;return Object(p.a)(this,t),(a=Object(f.a)(this,Object(A.a)(t).call(this,e))).hideModal=function(){var e=a.props.onHide;e&&e()},a.customizedColumn=function(){var e=a.props.intl;return[{title:s()(e.formatMessage({id:"propose_number"})),dataIndex:"index",align:"left",render:function(e,t,a){return B.a.createElement("div",null,a+1)}},{title:s()(e.formatMessage({id:"developers_contribution_link"})),dataIndex:"address",key:"address",align:"left",className:"ant_table",width:"80%",render:function(e,t,a){return B.a.createElement(y.e,{href:t.url,target:"_blank",className:"text-muted"},B.a.createElement("span",null,t.url))}},{title:s()(e.formatMessage({id:"developers_earn_points"})),dataIndex:"balance",key:"supply",align:"left",className:"ant_table",render:function(e,t,a){return B.a.createElement("div",null,B.a.createElement(O.c,{value:t.points}))}}]},a.state={loading:!1},a}return Object(h.a)(t,e),Object(E.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this.state.loading,t=this.props,a=(t.intl,t.notes),n=a.length,r=this.customizedColumn();return B.a.createElement(j.d,{isOpen:!0,toggle:this.hideModal,fade:!1,className:"modal-dialog-centered _freezeContent developers_note"},B.a.createElement(j.g,{className:"text-center _freezeHeader",toggle:this.hideModal},Object(Q.c)("developers_points_details")),B.a.createElement(j.e,{className:"text-center _freezeBody token_black"},B.a.createElement(_.a,{bordered:!0,loading:e,column:r,data:a,total:n,position:"bottom"})))}}]),t}(B.a.PureComponent))||n)||n)||n,M=(a(200),I.a.Search),Y=function(e){function t(){var e;return Object(p.a)(this,t),(e=Object(f.a)(this,Object(A.a)(t).call(this))).loadAccounts=Object(g.a)(u.a.mark(function t(){var a,n,r,c,l,s,o,i,d=arguments;return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return a=d.length>0&&void 0!==d[0]?d[0]:1,n=d.length>1&&void 0!==d[1]?d[1]:20,r=e.state,c=r.searchCriteria,l=r.filter,e.setState({loading:!0}),t.next=6,H.a.getUserList(Object(m.a)({search:c,pageSize:n,page:a},l));case 6:s=t.sent,o=s.data,i=s.total,o.map(function(e,t){e.index=t+1,e.extraData=new Function("return "+e.extra)()}),console.log("data",o),e.setState({loading:!1,developers:o,total:i,pagination:Object(m.a)({},e.state.pagination,{total:i})});case 12:case"end":return t.stop()}},t)})),e.handleTableChange=function(t,a,n){var r=Object(m.a)({},e.state.pagination);r.current=t.current,r.pageSize=t.pageSize;e.setState({pagination:r,filter:Object(m.a)({},e.state.filter,{sortField:{currentYear:"currentYear",currentQuarter:"currentQuarter",currentMonth:"currentMonth"}[n.columnKey]||"currentMonth",userSort:{descend:-1,ascend:1}[n.order]||"-1",order_current:n.order})},function(){return e.loadAccounts(r.current,r.pageSize)})},e.hideModal=function(){e.setState({modal:null})},e.showNote=function(t){var a=new Function("return "+e.state.developers[t].note)();e.setState({modal:B.a.createElement(L,{notes:a,onHide:e.hideModal})})},e.onChange=function(t,a){e.loadAccounts(t,a)},e.onSearchChange=function(t){e.setState({searchCriteria:i()(t)},function(){e.loadAccounts()})},e.customizedColumn=function(){var t=e.props.intl,n=e.state.filter;return[{title:s()(t.formatMessage({id:"developers_username"})),dataIndex:"name",key:"name",align:"left",className:"ant_table",width:"40%",render:function(e,t,n){return console.log(t.extraData),B.a.createElement("div",null,t.extraData&&"null"!==t.extraData.imgUrl?B.a.createElement("div",null,B.a.createElement("img",{src:t.extraData.imgUrl,width:"20",height:"20",alt:"@"+t.name}),B.a.createElement("span",{className:"ml-2"},t.name)):B.a.createElement("div",null,B.a.createElement("img",{src:a(2019),width:"20",height:"20",alt:"@"+t.name}),B.a.createElement("span",{className:"ml-2"},t.name)))}},{title:s()(t.formatMessage({id:"developers_current_year"})),dataIndex:"currentYear",key:"currentYear",align:"center",className:"ant_table",sorter:!0,sortOrder:"currentYear"===n.sortField&&n.order_current,render:function(e,t,a){return B.a.createElement("div",null,B.a.createElement(O.c,{value:t.currentYear}))}},{title:s()(t.formatMessage({id:"developers_current_quarter"})),dataIndex:"currentQuarter",key:"currentQuarter",align:"center",sorter:!0,sortOrder:"currentQuarter"===n.sortField&&n.order_current,render:function(e,t,a){return B.a.createElement("div",null,B.a.createElement(O.c,{value:t.currentQuarter}))}},{title:s()(t.formatMessage({id:"developers_current_month"})),dataIndex:"currentMonth",key:"currentMonth",align:"center",className:"ant_table",sorter:!0,sortOrder:"currentMonth"===n.sortField&&n.order_current,render:function(e,t,a){return B.a.createElement("div",null,B.a.createElement(O.c,{value:t.currentMonth}))}},{title:s()(t.formatMessage({id:"trc20_cur_order_header_action"})),dataIndex:"action",key:"action",align:"right",className:"ant_table",render:function(t,a,n){return B.a.createElement("a",{href:"javascript:;",onClick:function(){e.showNote(n)}},Object(Q.c)("developers_view_points"))}}]},e.state={modal:null,loading:!0,searchString:"",developers:[],total:0,searchCriteria:"",pagination:{showQuickJumper:!0,position:"bottom",showSizeChanger:!0,defaultPageSize:20,total:0},filter:{sortField:"currentMonth",userSort:-1,order_current:"descend"}},e}return Object(h.a)(t,e),Object(E.a)(t,[{key:"componentDidMount",value:function(){this.loadAccounts()}},{key:"renderAccounts",value:function(){var e=this.state.developers;if(0!==e.length)return B.a.createElement(v.Fragment,null,B.a.createElement("div",{className:"table-responsive"},B.a.createElement("table",{className:"table table-striped m-0"},B.a.createElement("thead",{className:"thead-dark"},B.a.createElement("tr",null,B.a.createElement("th",null,Object(Q.c)("address")),B.a.createElement("th",{className:"d-md-table-cell"},Object(Q.c)("supply")),B.a.createElement("th",{className:"d-md-table-cell"},Object(Q.c)("power")),B.a.createElement("th",null,Object(Q.c)("balance")))),B.a.createElement("tbody",null,e.map(function(e,t){return B.a.createElement("tr",{key:e.address},B.a.createElement("th",null,B.a.createElement(y.a,{address:e.address})),B.a.createElement("td",{className:"d-md-table-cell text-nowrap"},B.a.createElement(O.c,{value:e.balance/S.w/S.g*100,minimumFractionDigits:8,maximumFractionDigits:8})," %"),B.a.createElement("td",{className:"text-nowrap d-md-table-cell"},B.a.createElement(O.c,{value:e.power/S.w})),B.a.createElement("td",{className:"text-nowrap"},B.a.createElement(x.b,{amount:e.balance/S.w})))})))))}},{key:"render",value:function(){var e=this,t=this.props,a=(t.match,t.intl),n=this.state,r=n.total,l=n.loading,s=n.rangeTotal,o=void 0===s?0:s,i=n.developers,d=n.modal,u=this.customizedColumn();a.formatMessage({id:"view_total"}),a.formatMessage({id:"account_unit"}),a.formatMessage({id:"table_info_big"}),a.formatMessage({id:"table_info_account_tip1"}),a.formatMessage({id:"table_info_account_tip2"});return B.a.createElement("main",{className:"container header-overlap pb-3 token_black"},d,l&&B.a.createElement("div",{className:"loading-style"},B.a.createElement(w.b,null)),B.a.createElement("div",{className:"row mt-2"},B.a.createElement("p",{className:"develpopers_reward_tip"},Object(Q.c)("develpopers_reward_tip")),B.a.createElement("div",{className:"col-md-12 table_pos trc20-ad-bg"},r?B.a.createElement("div",{className:"table_pos_info d-none d-md-block",style:{left:"auto"}},B.a.createElement("div",null,Object(Q.c)("view_total")," ",r," ",Object(Q.c)("account_unit"))):"",B.a.createElement("div",{className:"table_pos_search",style:{right:"15px"}},B.a.createElement(M,{placeholder:a.formatMessage({id:"developers_search"}),enterButton:a.formatMessage({id:"search"}),size:"large",onSearch:function(t){return e.onSearchChange(t)}})),B.a.createElement("div",{className:"card table_pos table_pos_addr table_pos_addr_data"},B.a.createElement(c.a,{columns:u,rowKey:function(e,t){return t},dataSource:i,loading:l,onChange:this.handleTableChange,pagination:this.state.pagination,bordered:!0,rowClassName:function(e,t){if(e.index<6)return"trc20-star-ad"}})))))}}]),t}(v.Component);var J={loadAccounts:k.r};t.default=Object(C.connect)(function(e){return{accounts:e.app.accounts}},J)(Object(O.h)(Y))}}]);