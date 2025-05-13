/**
 * 저장소 하위 Markdown 파일들을 이용해서 각 디렉토리에 README.md 파일을 만든다.
 *
 * ● 실행 방법
 * $ node build_readme.js
 */

const fs = require('fs');
const path = require('path');

// 저장소 루트 경로
const ROOT_PATH = __dirname;

// GitHub URL
const BASE_URL = "https://github.com/che-free/dev-note/blob/main";

// UTF-8 BOM
const BOM = '\ufeff';

// Default 정렬값
const DEFAULT_ORDER_NO = 5000;

// 디렉토리, 파일 메타 정보
const META_DATA = {
    "/": { orderNo: null, title: "개발 노트" },
    //"/MySQL(MariaDB)": { orderNo: 100, title: null },
    //"/NodeJS": { orderNo: 120, title: null },
}


// 메인 프로그램 시작
main();


/**
 * 프로그램 메인
 */
function main() {
    console.log("ROOT_PATH :: " + ROOT_PATH);

    // 디렉토리 리스트 조회
    const allDirs = getAllMarkdownDirectories();

    //console.log(JSON.stringify(allDirs, null, 4));

    allDirs.forEach((dir) => {
        if (dir.fileCount > 0) {
            // README.md 파일 생성
            makeReadmeFile(dir, allDirs);
        }
    });
}


/**
 * README.md 파일을 만든다.
 */
function makeReadmeFile(baseDir, allDirs) {
    //console.log("README :: " + baseDir.path);

    let content = "";

    // 디렉토리 정렬
    baseDir.dirs.sort(function (a, b) {
        let order1 = getOrderNo(a);
        let order2 = getOrderNo(b);

        if (order1 != order2) {
            return order1 > order2 ? 1 : -1;
        }

        return a.toLowerCase() > b.toLowerCase() ? 1 : -1;
    });

    // 1레벨
    let title = getHeaderTitle(baseDir.path);
    content += `# ${title}` + "\r\n";

    baseDir.files.forEach((file) => {
        content += makeLinkItem(baseDir.path, file);
    });

    // 2레벨
    baseDir.dirs.forEach((dir1) => {
        allDirs.forEach((dir2) => {
            if (dir2.fileCount > 0) {
                if (dir2.path == dir1) {
                    title = getHeaderTitle(dir2.path);
                    content += "\r\n\r\n" + `## ${title}` + "\r\n";

                    dir2.files.forEach((file) => {
                        content += makeLinkItem(dir1, file);
                    });
                } else if (dir2.path.startsWith(dir1 + "/")) {
                    dir2.files.forEach((file) => {
                        content += makeLinkItem(dir1, file);
                    });
                }
            }
        });
    });

    content += "\r\n";

    saveReadmeFile(baseDir.path, content);
}


/**
 * 경로명으로 Readme 헤더 텍스트를 구한다.
 */
function getHeaderTitle(dirPath) {
    let meta = META_DATA[dirPath];
    let title = dirPath.split("/").pop();

    if (meta && meta.title) {
        title = meta.title;
    }

    return title;
}


/**
 * 경로명으로 정렬값을 구한다.
 */
function getOrderNo(dirPath) {
    let meta = META_DATA[dirPath];
    let orderNo = DEFAULT_ORDER_NO;

    if (meta && meta.orderNo) {
        orderNo = meta.orderNo;
    }

    return orderNo;
}


/**
 * Markdown 파일 링크 텍스트를 만든다.
 */
function makeLinkItem(basePath, file) {
    let text = file.substr(basePath.length + 1);;
    text = text.substr(0, text.length - 3);

    //let url = BASE_URL + encodeURIComponent(file.file);
    let url = BASE_URL + encodeURI(file);

    // [MySQL_SQL_code_snippets](https://github.com/che-free/dev-note/blob/main/MySQL(MariaDB)/MySQL_SQL_code_snippets.md)
    html = `- [${text}](${url})` + "\r\n";

    return html;
}


/**
 * 저장소 하위 전체 디렉토리 및 디렉토리별 Markdown 파일 리스트를 리턴한다.
 */
function getAllMarkdownDirectories() {
    let ignoreFiles = [".git", "README.md"];

    const walkSync = (dir, files = []) => {
        const filenames = fs.readdirSync(dir);
        const dirInfo = {
            path: (dir == ROOT_PATH ? "/" : dir.substring(ROOT_PATH.length).replaceAll("\\", "/")),
            fileCount: 0,
            dirs: [],
            files: [],
        }

        for (const filename of filenames) {
            const file = path.join(dir, filename);

            if (ignoreFiles.includes(filename)) {
                continue;
            }

            const stats = fs.statSync(file);

            if (stats.isFile()) {
                const dirname = path.dirname(file);
                const extname = path.extname(file);
                const filePath = file.substring(ROOT_PATH.length).replaceAll("\\", "/");

                if (extname != ".md") {
                    continue;
                }

                dirInfo.files.push(filePath);
            } else if (stats.isDirectory()) {
                const filePath = file.substring(ROOT_PATH.length).replaceAll("\\", "/");

                dirInfo.dirs.push(filePath);
                walkSync(file, files);
            }
        }

        files.push(dirInfo);

        return files;
    }

    // 재귀호출로 디렉토리 리스트 조회
    dirs = walkSync(ROOT_PATH);

    // 각 디렉토리의 하위 파일 개수 합계 계산
    dirs.forEach((dir1) => {
        dirs.forEach((dir2) => {
            if (dir1.path == "/" || dir2.path == dir1.path || dir2.path.startsWith(dir1.path + "/")) {
                dir1.fileCount += dir2.files.length;
            }
        });
    });

    // 디렉토리 리스트 정렬
    dirs.sort(function (a, b) {
        return a.path.toLowerCase() > b.path.toLowerCase() ? 1 : -1;
    });

    return dirs;
}


/**
 * README.md 파일에 저장한다.
 */
function saveReadmeFile(filePath, content) {
    const fs = require('fs');
    const fileName = path.resolve(ROOT_PATH + filePath + "/README.md");

    console.log("README :: " + fileName);

    fs.writeFileSync(fileName, BOM + content);
}


