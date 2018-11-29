<template>
  <div style="width:800px;padding: 20px;">
    <el-table :data="tableData"
      border
      row-key="id"
      align="center">
     <el-table-column label="序号" type="index"></el-table-column>
     <!--<el-table-column v-for="(item, index) in col"
        :key="`col_${index}`"
        :prop="dropCol[index].prop"
        :label="item.label"> 
      </el-table-column>-->
      <el-table-column
        prop="date"
        width="120"
        label="日期"
        >
        <template slot-scope="scope">
          <el-input v-model="scope.row.date"></el-input>
        </template>
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="120"
        >
        <template slot-scope="scope">
          <el-input v-model="scope.row.name"></el-input>
        </template>
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址"
        >
        <template slot-scope="scope">
          <el-input v-model="scope.row.address"></el-input>
        </template>
      </el-table-column>
      <el-table-column
       label="操作"
       width="100">
       <template slot-scope="scope">
         <el-button class="switcher" icon="el-icon-rank" type="text" style="font-size: 20px;"></el-button>
         <el-button icon="el-icon-close" @click="deleteRow(scope.$index, tableData)" type="text" style="font-size: 20px;"></el-button>
       </template>
      </el-table-column>
      <div slot="append" style="text-align: center;">
      	<el-button type="text" icon="el-icon-plus" @click="add">新建操作步骤</el-button>
      </div>
    </el-table>
  </div>
</template>
<script>
import Sortable from 'sortablejs'
export default {
  data() {
    return {
      col: [
        {
          label: '日期',
          prop: 'date'
        },
        {
          label: '姓名',
          prop: 'name'
        },
        {
          label: '地址',
          prop: 'address'
        }
      ],
      dropCol: [
        {
          label: '日期',
          prop: 'date'
        },
        {
          label: '姓名',
          prop: 'name'
        },
        {
          label: '地址',
          prop: 'address'
        }
      ],
      tableData: [
        {
          id: '1',
          date: '2016-05-02',
          name: '1',
          address: '上海市普陀区金沙江路 100 弄'
        },
        {
          id: '2',
          date: '2016-05-04',
          name: '2',
          address: '上海市普陀区金沙江路 200 弄'
        },
        {
          id: '3',
          date: '2016-05-01',
          name: '3',
          address: '上海市普陀区金沙江路 300 弄'
        },
        {
          id: '4',
          date: '2016-05-03',
          name: '4',
          address: '上海市普陀区金沙江路 400 弄'
        }
      ]
    }
  },
  mounted() {
    this.rowDrop()
  },
  watch: {
    tableData (val) {
      console.log('changeData>>>>>' + JSON.stringify(val))
    }
  },
  methods: {
    rowDrop() {
      const tbody = document.querySelector('.el-table__body-wrapper tbody')
      const _this = this
      var sortable = Sortable.create(tbody, {
      	onChoose: function (/**Event*/evt) {
		      evt.oldIndex;  // 选中行返回索引
	      },
      	onAdd: function (evt){ //拖拽时候添加有新的节点的时候发生该事件
          console.log('onAdd.foo:', [evt.item, evt.from]); 
        },
        onUpdate: function (evt){ //拖拽更新节点位置发生该事件
          console.log('onUpdate.foo:', [evt.item, evt.from]); 
        },
        onRemove: function (evt){ //删除拖拽节点的时候促发该事件
          console.log('onRemove.foo:', [evt.item, evt.from]); 
        },
        onStart:function(evt){ //开始拖拽出发该函数
          console.log('onStart.foo:', [evt.item, evt.from]);
        },
        onSort:function(evt){ //发生排序发生该事件
          console.log('onSort.foo:', [evt.item, evt.from]);
        },
        onEnd:function ({ newIndex, oldIndex }) { // 拖拽完毕执行
          const currRow = _this.tableData.splice(oldIndex, 1)[0]
          _this.tableData.splice(newIndex, 0, currRow)
        },
        handle: '.switcher',
        animation: 150
      })
    },
    add () {
      this.tableData.push({
        id: null,
        data: '',
        name: '',
        address: ''
      })
    },
    deleteRow(index, rows) {
      rows.splice(index, 1)
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
</style>