(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{1029:function(t,o,n){"use strict";n.r(o);var e=n(147),r=(n(150),n(145)),i=function(t,o){return(o-t)*Math.random()+t},a={components:{XdhMap:r.c,XdhMapGroup:r.k,XdhMapHtml:r.m},data:function(){return{target:[113,23],map:null,view:null,zoom:7,range:300,coorProp:"position",total:80,textArray:[],groups:[]}},methods:{mapReady:function(t){this.map=t,this.view=this.map.getView(),this.view.on("change",this.viewChangeHandle)},groupPointClick:function(t,o){var n=this;o.forEach(function(t){t.detailShow=!1}),this.$nextTick(function(){t.detailShow=!0,1===t.points.length?n.$refs.map.moveTo(t.points[0].position):n.$refs.map.zoomAt(t.area,{maxZoom:12})})},groupSet:function(t){return t.map(function(t,o){return Object(e.a)({},t,{name:"组".concat(o,"(").concat(t.points.length,")")})})},groupsInit:function(t){this.groups=t},viewChangeHandle:function(t){var o=this;this.timer&&clearTimeout(this.timer),this.timer=setTimeout(function(){t.target.getZoom()<o.zoom&&o.groups.forEach(function(t){t.detailShow=!1})},500)},createTexts:function(){for(var t=[],o=0;o<this.total;o++)t.push({position:[i(107,119),i(20.8,25.2)],text:"".concat(o),font:"12px",background:"#fff",strokeColor:"red",padding:[5,5,5,5],color:"blue"});return t}},created:function(){this.textArray=this.createTexts()}},p=(n(713),n(16)),s=Object(p.a)(a,function(){var t=this,o=t.$createElement,n=t._self._c||o;return n("div",{staticStyle:{height:"400px"}},[n("xdh-map",{ref:"map",attrs:{type:"Baidu",zoom:t.zoom,center:t.target},on:{ready:t.mapReady}},[t.textArray.length?n("xdh-map-group",{attrs:{data:t.textArray,"coor-prop":"position","groups-set":t.groupSet,rang:t.range,coorProp:t.coorProp},on:{"on-groupInit":t.groupsInit},scopedSlots:t._u([{key:"group",fn:function(o){return[n("xdh-map-html",{attrs:{visible:!o.group.detailShow,position:o.group.center},on:{click:function(n){return t.groupPointClick(o.group,o.data)}}},[n("div",{staticClass:"group"},[t._v(t._s(o.group.name))])])]}},{key:"point",fn:function(t){return[n("xdh-map-html",{attrs:{position:t.point.position}},[n("div",{staticClass:"point"})])]}}],null,!1,1537888982)}):t._e()],1)],1)},[],!1,null,"5a169e97",null);o.default=s.exports},408:function(t,o,n){},713:function(t,o,n){"use strict";var e=n(408);n.n(e).a}}]);