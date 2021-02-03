<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-19 21:57:21
 * @LastEditTime: 2019-09-22 15:09:30
 * @LastEditors: Please set LastEditors
 -->
<template>
    <example>
      
      <div class="map-warp" style="width: 100%; height: 500px;">
        <xdh-map :zoom="9" :center="[120, 30]" ref="map" @ready="readyInit" @on-dragUp="dragUpHandle" @pointermove="overLayMouseMove">
          <xdh-map-circle :position="circleRed.point"
                      :radius="0.1"
                      fill="blue"
                      stroke-color="red"
                      :stroke-width="5"
                      :props="{'dragFlag': circleRed.dragFlag, id: 'circleRed'}"
          ></xdh-map-circle>
                       

          <xdh-map-circle :position="circleGreen.point"
                      :radius="0.1"
                      fill="blue"
                      stroke-color="green"
                      :stroke-width="5"
                      :props="{'dragFlag': circleGreen.dragFlag, id: 'circleGreen'}"
          ></xdh-map-circle>

          <xdh-map-html id="test" :position="htmlPoint"   @mousedown="overLayMouseDown"
          @mouseup="overLayMouseUp"
          >
            <div  style="background: red; width: 80px; height: 80px;"></div>
          </xdh-map-html>
        </xdh-map>
      </div>
      <p>绿圈能拖红圈不能拖</p>
      <p>pointGreen: {{circleGreen.point}}</p>
      <p>pointHtml: {{htmlPoint}}</p>
      <p>PS: <br/>
        地图上 图型(feature)物体的拖动事件 作用在 xdh-map 的组件上。引入"Drag" 交互后，可以直接 监听 地图上的 "on-dragDown"/"on-pointermove"/"onDragUp" 事件 <br/>

        地图上 HTML(overlay)元素的拖动事件，作用在 xdh-html的组件上。因此可以直接监听 xdh-html上的原生html 事件实现拖动效果

      </p>
    </example>
</template>

 
<script>
// import Drag from '../../utils/interactions/drag'
import {DragClass as Drag} from '../../packages/index.js'
export default {
  directives: {},
  data() {
    return {

      dragOverlay: false,
      htmlPoint: [120.05, 30.05],
      circleGreen: {
        point: [120, 30],
        dragFlag: true
      },
      circleRed: {
        point: [120.08, 30.08],
        dragFlag: false
      }
    }
  },
  
  methods: {
    readyInit(map, mapComp) {
      let dragInteraction = new Drag(mapComp, {
        featureDefine: (feature) => { // 自定义参数过滤需要拖动的组件
          let feaProps = feature.getProperties()
          if (feaProps.dragFlag) {
            return feature
          }
        }
      })
      map.addInteraction(dragInteraction)
      
    },
    dragUpHandle(feature, event) {
      if (feature.getProperties().id === 'circleGreen') {
        this[feature.getProperties().id].point = event.coordinate
      }
    },
    overLayMouseDown(htmlVm, overlay, event) {
      this.dragOverlay = overlay
    },
    overLayMouseMove(event) {
      if (this.dragOverlay) {
        this.htmlPoint = event.coordinate
      }
    },
    overLayMouseUp(event) {
      this.dragOverlay = null
    }
  },
  mounted() {
  }
}
</script>

