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
    "/": { orderNo: null, title: "개발 메모" },
    //"/MySQL(MariaDB)": { orderNo: null, title: "MYSQL" },
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

    allDirs.forEach((dir1) => {
        if (dir1.totalCount > 0) {
            const dirs = [];

            allDirs.forEach((dir2) => {
                if (dir1.path == "/" || dir2.path == dir1.path || dir2.path.startsWith(dir1.path + "/")) {
                    dirs.push(dir2);
                }
            });

            // README.md 파일 생성
            makeReadmeFile(dir1, JSON.parse(JSON.stringify(dirs)));
        }
    });
}


/**
 * README.md 파일을 만든다.
 */
function makeReadmeFile(readmeDir, dirs) {
    //console.log("README :: " + readmeDir.path);

    let content = "";

    // TODO: 디렉토리 정렬

    dirs.forEach((dir) => {
        let title = null;
        let basePath = null;

        if (dir.depth == readmeDir.depth) {
            title = getHeaderText(dir);

            content += `# ${title}` + "\r\n";
        } else if (dir.depth == readmeDir.depth + 1 && dir.totalCount > 0) {
            title = getHeaderText(dir);

            content += "\r\n\r\n" + `## ${title}` + "\r\n";
        }

        if (dir.depth == readmeDir.depth) {
            basePath = dir.path.split("/").slice(0, readmeDir.depth + 1).join("/");
        } else {
            basePath = dir.path.split("/").slice(0, readmeDir.depth + 2).join("/");
        }

        if (dir.files.length > 0) {
            dir.files.forEach((file) => {
                content += makeLinkItem(basePath, file);
            });
        }
    });

    content += "\r\n";

    saveReadmeFile(readmeDir.path, content);
}


/**
 * 경로명으로 Readme 헤더 텍스트를 구한다.
 */
function getHeaderText(dir) {
    let meta = META_DATA[dir.path];
    let title = dir.path.split("/").pop();

    if (meta && meta.title) {
        title = meta.title;
    }

    return title;
}


/**
 * Markdown 파일의 링크 텍스트를 만든다.
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
            depth: null,
            totalCount: 0,
            count: 0,
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

                dirInfo.count++;
                dirInfo.files.push(filePath);
            } else if (stats.isDirectory()) {
                walkSync(file, files);
            }
        }

        dirInfo.depth = (dirInfo.path == "/" ? 0 : dirInfo.path.split("/").length - 1);

        files.push(dirInfo);

        return files;
    }

    // 재귀호출로 디렉토리 리스트 조회
    dirs = walkSync(ROOT_PATH);

    // 각 디렉토리의 하위 파일 개수 합계 계산
    dirs.forEach((dir1) => {
        dirs.forEach((dir2) => {
            if (dir1.path == "/" || dir2.path == dir1.path || dir2.path.startsWith(dir1.path + "/")) {
                dir1.totalCount += dir2.files.length;
            }
        });
    });

    // 디렉토리 리스트 정렬
    dirs.sort(function (a, b) {
        return a.path > b.path ? 1 : -1;
    });

    return dirs;
}


/**
 * README.md 파일에 저장한다.
 */
function saveReadmeFile(readmePath, content) {
    const fs = require('fs');
    const fileName = path.resolve(ROOT_PATH + readmePath + "/README.md");

    console.log("README :: " + fileName);

    fs.writeFileSync(fileName, BOM + content);
}


