const text = [`
  /*
  * Hello, 我叫罗晓彬
  * 小姐姐、小哥哥看简历看累了吧，放松下吧,来点与众不同的！
  * 作为一名前端工程师简历必须炫酷, 那么Show time!
  */

  /* 弄点过渡效果显得柔和 */
  * {
    transition: all 0.5s ease-in-out;
  }

  /* 来点颜色瞧瞧 */
  html {
    height: 0;
    color: rgb(222,222,222);
    background: linear-gradient(135deg, #670d10 0%, #092756 100%) no-repeat;
    height: 100%;
  }
  /* 调整下边距 */
  .vioce_box {
    border: 1px solid;
    height: 95vh;
    padding: 30px;
    overflow: auto;
  }

  /* 要不加个光标吧 */
  .highlight_text::after {
    width: 20px;
    height: 20px;
    display: inline-block;
    background-size: 20px;
    margin-left: 25px;
    animation: blink 1s ease-in-out infinite;
    transform-origin: center left;
  }

  /* 高亮下代码显得有科技感 */
  .token.selector{ color: rgb(133,153,0); }
  .token.property{ color: rgb(187,137,0); }
  .token.punctuation{ color: yellow; }
  .token.function{ color: rgb(42,161,152); }

  /* 3D效果来一个 */
  html {
    perspective: 1000px;
  }
  
  /* 让我们挪到左边来一点 */
  .vioce_box {
     -webkit-transform: rotateY(10deg) translateZ(-100px) ;
            transform: rotateY(10deg) translateZ(-100px) ;
    left: 0;
    top: 10px;
    position: fixed; 
  }

  /* 呃,滚动条可以美化一下 */
  ::-webkit-scrollbar {
    width: 10px;
    height: 10px;
    background-color: #c36368;
  }

  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px #333;
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #491627;
    border-radius: 10px;
  } 

  /* 调整好后就可以准备写简历啦 */
  .resume_box {
    position: fixed;
    right: 15px;
    top: 0;
    width: 48vw;
    height: 95vh;
    padding: 15px;
    margin: 15px;
    border: 1px solid;
    color: #222;
    background: white;
    overflow: auto;
  }
  /* 开始干活 */
`, 
`
/* Markdown转换再美化下 */
.resume_box {
  padding: 25px;
}

.resume_box p {
  padding-left: 15px;
}

.resume_box h2 {
  font-size: 17px;
}

.resume_box ul {
  line-height: 20px;
}
`]

export default text
