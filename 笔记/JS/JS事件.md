[TOC]

## 事件定义和绑定解绑

1.  **事件**

    html事件和dom事件（dom0级事件，dom2级事件（addEventListener））

    

2.  **绑定与解绑**

    ```js
    //IE8及以下：
    attachEvent(type,fn,boolean);
    deattachEvent(type,fn,boolean);//事件名称on
    
    //主流
    removeEventListener(type,fn,boolean);
    addEventListener(type,fn,boolean);
    ```

    ```js
    const addEventListener=addHander=>(el,type,fn){
        if(el.addEventListener){
            el.addEventListener(type,fn,false);
        }else if(el.attachEvent){
            el.attachEvent('on'+type,fn);
        }else{
            el['on'+type]=null;
        }
    }
    ```

    

## 事件机制

1.  **事件冒泡**

    事件沿着DOM树从下往上传播，默认**false**。

    ```js
      IE 5.5: div -> body -> document
    
      IE 6.0: div -> body -> html -> document
    
      Mozilla 1.0: div -> body -> html -> document -> window
    ```

    

2.  **事件捕获**

    事件沿着DOM树，从上向下传播，默认**true**。

    ```html
    <div id="parent">
    　　<div id="child" class="child"></div>
    </div>
    ```

    ```js
     document.getElementById("parent").addEventListener("click",function(e){
                    alert("parent事件被触发，"+this.id);
                })
                document.getElementById("child").addEventListener("click",function(e){
                    alert("child事件被触发，"+this.id)
                })
    ```

    

3.  **event对象**

    | 属性和方法              | 描述                                                   |
    | :---------------------- | :----------------------------------------------------- |
    | **type**                | 返回当前事件的名称                                     |
    | **target**              | 返回触发此事件的目标节点，源头                         |
    | **currenTarget**        | 返回事件监听器触发该事件的元素                         |
    | **preventDefault（）**  | 阻止默认事件==(event.cancelBubble=true)==              |
    | **stopPropagation（）** | 停止派发事件==(return false/event.returnValue=false)== |
    | **clientX/Y**           | 鼠标相对于可视区的位置                                 |
    | **pageX/Y**             | 鼠标相对于文档的位置                                   |
    | **offsetX/Y**           | 鼠标相对于操作元素(鼠标点击元素)到盒子边缘(左上)的位置 |
    | **screenX/Y**           | 鼠标相对于显示屏的位置                                 |

4.  **事件委托**

    利用事件冒泡，绑定事件到父元素及以上。

    ```html
    <ul id="test">
        <li>
          <p>11111111111</p>
        </li>
        <li>
          <div>
          </div>
        </li>
        <li>
          <span>3333333333</span>
        </li>
        <li>4444444</li>
      </ul>
    ```

    ```js
    var oUl = document.getElementById('test');
      oUl.addEventListener('click',function(ev){
        var target = ev.target;
        while(target !== oUl ){
          if(target.tagName.toLowerCase() == 'li'){
            console.log('li click~');
            break;
          }
          target = target.parentNode;
        }
      })
    ```

    



## 事件类型

1.  **鼠标事件**

    mouseout/mouseover ,    mousemove,（产生事件冒泡）mouseenter/mouseleave(没有冒泡事件)

    click ,    dbclick,    mouseup/mousedown， focus /blur ，focusin/focusout,  onchange，  onload

    submit ,   resize,    scroll

    如果当前event是鼠标事件，则会有一个==button==属性，它是一个数字
    ==0代表鼠标按下了左键, 1代表按下了滚轮 || 2代表按下了右键==

    

2.  **键盘事件**

    onkeydown + onkeyup =onpress（按下+弹起=点击）

    ==keyCode==         charCode

    **组合键**：ctrlKey、altKey、shiftKey

    ```js
                document.onkeydown=function(ev){
                  var ev=ev||window.event;
                  alert(ev.keyCode);//获取键码
                }
    
                document.onkeydown=function(ev){
                    var ev=ev||window.event
                    if(ev.keyCode==13&& ev.ctrlKey){ //摁下ctrl与回车 才执行
                        alert(1)
                    }
                    if(ev.keyCode==13&& ev.altKey){ //摁下alt  与回车 才执行
                        alert(2)
                    }
                }
    ```

    

3.  **DOM事件**



## 自定义事件

1.  **创建**

    ```js
    var myEvent = new CustomEvent('event_name', {
        detail:{
            // 将需要传递的数据写在detail中，以便在EventListener中获取
            // 数据将会在event.detail中得到
        },
    });
    ```

    

2.  **监听**

    ```js
    //假设listener注册在window对象上
    window.addEventListener('event_name', function(event){
        // 如果是CustomEvent，传入的数据在event.detail中
        console.log('得到数据为：', event.detail);
    
        // ...后续相关操作
    });
    ```

    

3.  **触发**

    ```js
    // 首先需要提前定义好事件，并且注册相关的EventListener
    var myEvent = new CustomEvent('event_name', { 
        detail: { title: 'This is title!'},
    });
    
    window.addEventListener('event_name', function(event){
        console.log('得到标题为：', event.detail.title);
    });
    
    // 随后在对应的元素上触发该事件
    if(window.dispatchEvent) {  
        window.dispatchEvent(myEvent);
    } else {
        window.fireEvent(myEvent);
    }
    // 根据listener中的callback函数定义，应当会在console中输出 "得到标题为： This is title!"
    ```

    

[TOC]