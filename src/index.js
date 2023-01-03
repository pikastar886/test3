import "./styles.css";

const onClickAdd = () => {
  // テキストボックスの値を取得し、初期化する。
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";
  // alert(inputText);

  createIncompleteList(inputText);
};

// 未完了リストから指定の要素を削除(下の２行を新たな関数にする）
//const deleteTarget = buttondone.parentNode;
//document.getElementById("incomplete-list").removeChild(deleteTarget);
const deleteFromIncompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

// 未完了リストに追加する関数
const createIncompleteList = (text) => {
  // div生成
  const div = document.createElement("div");
  div.className = "list-row";
  // console.log(div);

  // liタグ生成
  const li = document.createElement("li");
  li.innerText = text;
  //li.innerText = inputText;
  //console.log(li);

  // button（完了）タグの生成
  const buttondone = document.createElement("button");
  buttondone.innerText = "完了";
  buttondone.addEventListener("click", () => {
    //alert("完了");
    // 押された完了ボタンの親タグ（div）を未完了リストから削除
    deleteFromIncompleteList(buttondone.parentNode);
    //const deleteTarget = buttondone.parentNode;
    //console.log(doneTarget);
    //document.getElementById("incomplete-list").removeChild(deleteTarget);

    // 完了リストに追加する要素
    const addTarget = buttondone.parentNode;
    // TODO内容テキストを取得
    const text = addTarget.firstElementChild.innerText;
    //console.log(text);

    // div以下を初期化(liタグとボタンタグ２つを削除)
    addTarget.textContent = null;
    //console.log(addTarget);

    // liタグ生成
    const li = document.createElement("li");
    li.innerText = text;
    //console.log(li);

    // buttonタグ（戻すボタン）の生成
    const backbutton = document.createElement("button");
    backbutton.innerText = "戻す";
    backbutton.addEventListener("click", () => {
      //alert("戻す");
      // 押された戻すボタンの親タグ（div）を完了リストから削除
      const deleteTarget = backbutton.parentNode;
      document.getElementById("complete-list").removeChild(deleteTarget);

      //　テキスト取得
      const text = backbutton.parentNode.firstElementChild.innerText;
      //console.log(text);
      createIncompleteList(text);
    });

    // divタグの子要素に各要素を設定
    addTarget.appendChild(li);
    addTarget.appendChild(backbutton);
    //console.log(addTarget);

    // 完了リストに追加
    document.getElementById("complete-list").appendChild(addTarget);
  });
  //console.log(buttondone);

  // button（削除）タグの生成
  const buttondel = document.createElement("button");
  buttondel.innerText = "削除";
  buttondel.addEventListener("click", () => {
    //alert("削除");
    // 押された削除ボタンの親タグ（div）を未完了リストから削除
    deleteFromIncompleteList(buttondel.parentNode);
    //const deleteTarget = buttondel.parentNode;
    //console.log(deleteTarget);
    //document.getElementById("incomplete-list").removeChild(deleteTarget);
  });
  //console.log(buttondel);

  // divタグの子要素に各要素を設定
  div.appendChild(li);
  div.appendChild(buttondone);
  div.appendChild(buttondel);
  //console.log(div);

  // 未完了のリストに追加
  document.getElementById("incomplete-list").appendChild(div);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
