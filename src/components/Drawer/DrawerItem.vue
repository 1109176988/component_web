<script setup lang="ts">
import DialogItem from '../DialogItem.vue'
import { ref, reactive } from 'vue'

const showDrawer = ref(false)
const showDialog = ref(false)

function showBounced() {
  console.log('点击了外层确定按钮')
  showDialog.value = true
  console.log(showDialog.value, 'showDialog.value')
}

function updateHideOrshowItem(e: boolean) {
  console.log(e, 'e')
  showDialog.value = e
}
function calcleBtn() {
  console.log('calcleBtn')
  showDrawer.value = false
}
</script>

<template>
  <div>
    <a>打开嵌套From的drawer</a>
    <div class="wrapper" :class="{ 'drawer-style': !showDrawer }"></div>
    <div class="white-box" :class="{ 'drawer-style': !showDrawer }">
      <header class="header">
        <span>我嵌套了From!</span>
        <svg t="1697281987826" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
          p-id="4001" xmlns:xlink="http://www.w3.org/1999/xlink" width="14" height="14">
          <path
            d="M899.174 154.603l-29.782-29.782-357.397 361.114-357.397-361.114-29.782 29.782 361.114 357.397-361.114 357.397 29.782 29.782 357.397-361.114 357.397 361.114 29.782-29.782-361.114-357.397z"
            p-id="4002" fill="#bfbfbf"></path>
        </svg>
      </header>
      <section class="section-div">
        <div class="content">
          <form>
            <div class="form-item">
              <label class="form-item-label">活动名称</label>
              <div class="form-item-content">
                <div class="inputtable">
                  <input type="text" class="input">
                </div>
              </div>
            </div>
            <div class="form-item">
              <label class="form-item-label">活动区域</label>
              <div class="form-item-content">
                <div class="selecttable">
                  <div class="select-input">
                    <input class="input-region">
                    <span class="input-span">
                      <span class="input-span-inner">
                        <i class="input-span-i"></i>
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </form>
          <div class="footer">
            <button class="button" @click="calcleBtn">取消</button>
            <button class="button-sure" @click="showBounced">确定</button>
          </div>
        </div>
      </section>
      <div class="el-select-dropdown el-popper" style="min-width: 134.391px; transform-origin: center top; z-index: 2016; position: fixed; top: 15rem; left: 100px;border: 1px solid #e4e7ed;
    border-radius: 4px;display: none;
    background-color: #fff;
    box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
    box-sizing: border-box;
    margin: 5px 0;" x-placement="bottom-start">
        <div class="el-scrollbar" style="overflow: hidden;
    position: relative;">
          <div class="el-select-dropdown__wrap el-scrollbar__wrap" style="margin-bottom: -15px; margin-right: -15px;">
            <ul class="el-scrollbar__view el-select-dropdown__list"><!---->
              <li class="el-select-dropdown__item"><span>区域一</span></li>
              <li class="el-select-dropdown__item hover"><span>区域二</span></li>
            </ul>
          </div>
          <div class="el-scrollbar__bar is-horizontal">
            <div class="el-scrollbar__thumb" style="transform: translateX(0%);"></div>
          </div>
          <div class="el-scrollbar__bar is-vertical">
            <div class="el-scrollbar__thumb" style="transform: translateY(0%);"></div>
          </div>
        </div><!---->
        <div x-arrow="" class="popper__arrow" style="left: 35px;"></div>
      </div>
    </div>
    <DialogItem title="信息" text="确定要提交表单吗?" :hideOrshowItem="showDialog"
      @update:hide-orshow-item="updateHideOrshowItem" />
  </div>
</template>

<style scoped lang="less">
.wrapper {
  border: solid 1px #333;
  width: 100%;
  height: 100%;
  border: solid 1px #333;
  top: 0;
  left: 0;
  position: absolute;
  background-color: #333;
  opacity: 0.5;
}

.white-box {
  border: solid 1px #888;
  width: 28rem;
  height: 100%;
  left: 0;
  top: 0;
  position: absolute;
  // transform: translate(-50%, -50%);
  background-color: rgba(255, 255, 255, 1);
  box-shadow: 0 8px 10px -5px rgba(0, 0, 0, 0.2),
    0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12);

  .header {
    margin-bottom: 32px;
    padding: 20px 20px 0;

    svg {
      cursor: pointer;
      position: absolute;
      right: 1.4rem;
      top: 1.4rem;
    }
  }

  .section-div {
    padding: 1rem;
    height: 100%;

    .content {
      display: flex;
      flex-direction: column;
      height: 100%;
    }

    .form-item {
      margin-bottom: 4rem;

      .form-item-label {
        width: 5rem;
        text-align: right;
        vertical-align: middle;
        float: left;
        font-size: 14px;
        color: #606266;
        line-height: 40px;
        padding: 0 12px 0 0;
        box-sizing: border-box;
      }

      .form-item-content {
        margin-left: 5rem;
        line-height: 40px;
        position: relative;
        font-size: 14px;

        .inputtable {
          position: relative;
          font-size: 14px;
          display: inline-block;
          width: 100%;

          .input {
            -webkit-appearance: none;
            background-color: #fff;
            background-image: none;
            border-radius: 4px;
            border: 1px solid #dcdfe6;
            box-sizing: border-box;
            color: #606266;
            display: inline-block;
            font-size: inherit;
            height: 40px;
            line-height: 40px;
            outline: none;
            padding: 0 15px;
            transition: border-color .2s cubic-bezier(.645, .045, .355, 1);
            width: 100%;
          }
        }

        .selecttable {
          display: inline-block;
          position: relative;

          .select-input {
            position: relative;
            font-size: 14px;
            display: inline-block;
            width: 100%;

            .input-region {
              padding-right: 30px;
              cursor: pointer;
              -webkit-appearance: none;
              background-color: #fff;
              background-image: none;
              border-radius: 4px;
              border: 1px solid #dcdfe6;
              box-sizing: border-box;
              color: #606266;
              display: inline-block;
              font-size: inherit;
              height: 40px;
              line-height: 40px;
              outline: none;
              padding: 0 15px;
              transition: border-color .2s cubic-bezier(.645, .045, .355, 1);
              width: 100%;
            }

            .input-span {
              position: absolute;
              height: 100%;
              right: 5px;
              top: 0;
              text-align: center;
              color: #c0c4cc;
              transition: all .3s;
              pointer-events: none;

              .input-span-inner {
                pointer-events: all;
                position: absolute;
                height: 100%;
                right: 5px;
                top: 0;
                text-align: center;
                color: #c0c4cc;
                transition: all .3s;
                pointer-events: none;

                .input-span-i {
                  color: #c0c4cc;
                  font-size: 14px;
                  transition: transform .3s;
                  transform: rotate(180deg);
                  cursor: pointer;
                  width: 25px;
                  line-height: 40px;

                  &:before {
                    content: "\e6e1";
                    font-family: element-icons !important;
                    speak: none;
                    font-style: normal;
                    font-weight: 400;
                    font-variant: normal;
                    text-transform: none;
                    line-height: 1;
                    vertical-align: baseline;
                    display: inline-block;
                    -webkit-font-smoothing: antialiased;

                  }

                  &:after {
                    content: "";
                    height: 100%;
                    width: 0;
                    display: inline-block;
                    vertical-align: middle;
                    color: #c0c4cc;
                    font-size: 14px;
                    transition: transform .3s;
                    transform: rotate(180deg);
                    cursor: pointer;
                  }
                }
              }
            }
          }
        }
      }
    }

    .footer {
      display: flex;

      .button {
        flex: 1;
        display: inline-block;
        line-height: 1;
        white-space: nowrap;
        cursor: pointer;
        background: #fff;
        border: 1px solid #dcdfe6;
        color: #606266;
        -webkit-appearance: none;
        text-align: center;
        box-sizing: border-box;
        outline: none;
        margin: 0;
        transition: .1s;
        font-weight: 500;
        -moz-user-select: none;
        -webkit-user-select: none;
        -ms-user-select: none;
        padding: 12px 20px;
        font-size: 14px;
        border-radius: 4px;
      }

      .button-sure {
        display: inline-block;
        line-height: 1;
        white-space: nowrap;
        cursor: pointer;
        background: #fff;
        border: 1px solid #dcdfe6;
        color: #606266;
        -webkit-appearance: none;
        text-align: center;
        box-sizing: border-box;
        outline: none;
        margin: 0;
        transition: .1s;
        font-weight: 500;
        -moz-user-select: none;
        -webkit-user-select: none;
        -ms-user-select: none;
        padding: 12px 20px;
        font-size: 14px;
        border-radius: 4px;
        margin-left: 10px;
        flex: 1;
        color: #fff;
        background-color: #409eff;
        border-color: #409eff;
      }
    }
  }

  .el-scrollbar__wrap {
    overflow: scroll;
    height: 100%;

    .el-select-dropdown__list {
      list-style: none;
      padding: 6px 0;
      margin: 0;
      box-sizing: border-box;

      .el-select-dropdown__item {
        font-size: 14px;
        padding: 0 20px;
        position: relative;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        color: #606266;
        height: 34px;
        line-height: 34px;
        box-sizing: border-box;
        cursor: pointer;

        .el-select-dropdown__item {
          font-size: 14px;
          padding: 0 20px;
          position: relative;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          color: #606266;
          height: 34px;
          line-height: 34px;
          box-sizing: border-box;
          cursor: pointer;

          &:hover {
            background-color: #f5f7fa;
          }
        }
      }
    }
  }
}

.drawer-style {
  display: none;
}
</style>
