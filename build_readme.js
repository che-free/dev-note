/**
 * 소스 디렉토리 하위 Markdown 파일 리스트를 이용해서 README.md 파일을 생성한다.
 *
 * ● 실행 방법
 * $ node build_readme.js
 */

const BASE_URL = "https://github.com/che-free/dev-note/blob/main/";
const BOM = '\ufeff';
const DEFAULT_ORDER_NO = 9999;

const fs = require('fs');
const path = require('path');

// 디렉토리, 파일 정렬 순서 설정
const orders = {
    //"Java": 100,
    //"TIL": 200,
    //"MySQL(MariaDB)": 30,
    //"Javascript/CoinMarketCap API.md": DEFAULT_ORDER_NO - 10,
};

// 메인 프로그램 시작
main();

/**
 * 프로그램 메인
 */
function main() {
    const allFiles = getAllMarkdownFiles();
    const dirs = [];

    // 1레벨 디렉토리 리스트 생성
    allFiles.forEach((file) => {
        const depth = file.file.split("/").length;
        const dirname = file.dirname;

        if (depth == 2) {
            if (!dirs.includes(dirname)) {
                dirs.push(dirname);
            }
        }
    });

    // 파일 리스트 정렬
    allFiles.sort(function (a, b) {
        if (a.orderNo != b.orderNo) {
            return a.orderNo > b.orderNo ? 1 : -1;
        }

        if (a.dirname != b.dirname) {
            return a.dirname > b.dirname ? 1 : -1;
        }

        if (a.depth != b.depth) {
            return a.depth > b.depth ? 1 : -1;
        }

        return a.file > b.file ? 1 : 0;
    });

//    allFiles.forEach((file) => {
//        console.log("files :: ", file);
//    });

    // 디렉토리 리스트 정렬
    dirs.sort(function (a, b) {
        const order1 = orders[a] ? orders[a] : DEFAULT_ORDER_NO;
        const order2 = orders[b] ? orders[b] : DEFAULT_ORDER_NO;

        if (order1 != order2) {
            return order1 > order2 ? 1 : -1;
        }

        return a > b ? 1 : 0;
    });

//    dirs.forEach((dir) => {
//        console.log("dir :: ", dir);
//    });

    let content = "";

    content += makeHeader();

    dirs.forEach((dir) => {
        const files = [];

        allFiles.forEach((file) => {
            if (file.file.startsWith(dir + "/")) {
                files.push(file);
            }
        });

        content += makeDirSection(dir, files);
    });

    saveReadmeFile(content);
}


/**
 * README.md 파일 헤더 영역
 */
function makeHeader() {
    let content = "";

    content += "# 개발 노트";
    content += "\r\n" + "";

    return content;
}


/**
 * README.md 디렉토리별 파일 리스트 영역
 */
function makeDirSection(dir, files) {
    let content = "";

    console.log("** dir :: ", dir);
    console.log("files :: ", files);

    content += "\r\n" + `## ${dir}`;

    files.forEach((file) => {
        let text = file.file.substr(dir.length + 1);;
        text = text.substr(0, text.length - 3);

        //let url = BASE_URL + encodeURIComponent(file.file);
        let url = BASE_URL + encodeURI(file.file);

        // [MySQL_SQL_code_snippets.md](https://github.com/che-free/dev-note/blob/main/MySQL(MariaDB)/MySQL_SQL_code_snippets.md)
        content += "\r\n" + `- [${text}](${url})`;
    });

    content += "\r\n" + "";
    content += "\r\n" + "";


    return content;
}


/**
 * 디렉토리 하위에서 Markdown 전체 파일 리스트를 리턴한다.
 */
function getAllMarkdownFiles() {
    let ignoreFiles = [".git"];

    const walkSync = (dir, files = []) => {
        const filenames = fs.readdirSync(dir);

        for (const filename of filenames) {
            const file = path.join(dir, filename).replaceAll("\\", "/");

            if (ignoreFiles.includes(file)) {
                continue;
            }

            const stats = fs.statSync(file);

            if (stats.isFile()) {
                const dirname = path.dirname(file);
                const extname = path.extname(file);
                const orderNo = orders[file] ? orders[file] : DEFAULT_ORDER_NO;

                if (extname != ".md") {
                    continue;
                }

                files.push({
                    depth: file.split("/").length,
                    dirname: dirname,
                    filename: filename,
                    file: file,
                    orderNo: orderNo,
                });
            } else if (stats.isDirectory()) {
                walkSync(file, files);
            }
        }

        return files;
    }

    return walkSync(".\\");
}


/**
 * README.md 파일에 저장한다.
 */
function saveReadmeFile(content) {
    const fs = require('fs');
    const fileName = "README.md";

    fs.writeFileSync(fileName, BOM + content);
}

