//------------------------------------------------------------------------------
// 概要
// 	TSV形式のデータをMarkDownテーブルに置換するgPad用マクロ。
//------------------------------------------------------------------------------

main();

//------------------------------------------------------------------------------
// メイン
//------------------------------------------------------------------------------
function main() {
  var arrLine = new Array();
  var i = 0;

  // すべての行を確保する
  nLineCount = document.GetLines();
  for (ii = 1; ii <= nLineCount; ii++) {
    strLine = document.GetLine(ii);
    if (ii == nLineCount && strLine.length == 0) {
      continue;
    }
    arrLine.push(strLine);
  }

  // すべての行を削除
  document.Text = '';

  // MarkDown形式のTableに置換
  while (arrLine.length > 0) {
    strLine = arrLine.shift();
    strLine = '|' + strLine.replace(/\|/g, '&#124;').replace(/\t/g, '|') + '|';
    document.writeln(strLine);

    //1行目をタイトル行として扱う（|---|...を行追加）
    if (i == 0) {
      strLine = strLine.replace(/[^|]+/g, '---');
      document.writeln(strLine);
    }
    i++;
  }
}
