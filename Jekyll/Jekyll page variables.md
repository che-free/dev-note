---
title:  ""
---

# Jekyll Page variables

> Page Variables 참고 https://jekyllrb.com/docs/variables/

- page.content : site.pages, site.posts 본문 내용<br>
- page.excerpt : site.posts 발췌 내용<br>


### site.pages
- 유효한 속성값 : title, url, dir, name, path

#### 페이지 리스트 출력 샘플
```
<table>
  <thead><tr><th>title</th><th>url</th><th>date</th><th>id</th><th>categories</th><th>tags</th><th>dir</th><th>name</th><th>path</th><th>next</th><th>previous</th></tr></thead>
  <tbody>
{%- for page in site.pages -%}
    {%- assign row = "<tr>" -%}
    {%- assign row = row | append : "<td>" | append : page.title        | append : "</td>" -%}
    {%- assign row = row | append : "<td>" | append : page.url          | append : "</td>" -%}
    {%- assign row = row | append : "<td>" | append : page.date         | append : "</td>" -%}
    {%- assign row = row | append : "<td>" | append : page.id           | append : "</td>" -%}
    {%- assign row = row | append : "<td>" | append : page.categories   | append : "</td>" -%}
    {%- assign row = row | append : "<td>" | append : page.tags         | append : "</td>" -%}
    {%- assign row = row | append : "<td>" | append : page.dir          | append : "</td>" -%}
    {%- assign row = row | append : "<td>" | append : page.name         | append : "</td>" -%}
    {%- assign row = row | append : "<td>" | append : page.path         | append : "</td>" -%}
    {%- assign row = row | append : "<td>" | append : page.next.url     | append : "</td>" -%}
    {%- assign row = row | append : "<td>" | append : page.previous.url | append : "</td>" -%}
    {%- assign row = row | append : "</tr>" -%}
    {{ row }}
{%- endfor -%}
  </tbody>
</table>
```


### site.posts
- 유효한 속성값 : title, url, date, id, categories, tags, path, next, previous

#### 블로그 글 리스트 출력 샘플
```
<table>
  <thead><tr><th>title</th><th>url</th><th>date</th><th>id</th><th>categories</th><th>tags</th><th>dir</th><th>name</th><th>path</th><th>next</th><th>previous</th></tr></thead>
  <tbody>
{%- for page in site.posts -%}
    {%- assign row = "<tr>" -%}
    {%- assign row = row | append : "<td>" | append : page.title        | append : "</td>" -%}
    {%- assign row = row | append : "<td>" | append : page.url          | append : "</td>" -%}
    {%- assign row = row | append : "<td>" | append : page.date         | append : "</td>" -%}
    {%- assign row = row | append : "<td>" | append : page.id           | append : "</td>" -%}
    {%- assign row = row | append : "<td>" | append : page.categories   | append : "</td>" -%}
    {%- assign row = row | append : "<td>" | append : page.tags         | append : "</td>" -%}
    {%- assign row = row | append : "<td>" | append : page.dir          | append : "</td>" -%}
    {%- assign row = row | append : "<td>" | append : page.name         | append : "</td>" -%}
    {%- assign row = row | append : "<td>" | append : page.path         | append : "</td>" -%}
    {%- assign row = row | append : "<td>" | append : page.next.url     | append : "</td>" -%}
    {%- assign row = row | append : "<td>" | append : page.previous.url | append : "</td>" -%}
    {%- assign row = row | append : "</tr>" -%}
    {{ row }}
    {{ "" }}
{%- endfor -%}
  </tbody>
</table>
```


### site.static_files
- 유효한 속성값 : name, path

#### 파일 리스트 출력 샘플
```
<table>
  <thead><tr><th>title</th><th>url</th><th>date</th><th>id</th><th>categories</th><th>tags</th><th>dir</th><th>name</th><th>path</th><th>next</th><th>previous</th></tr></thead>
  <tbody>
{%- for page in site.static_files limit:10 -%}
    {%- assign row = "<tr>" -%}
    {%- assign row = row | append : "<td>" | append : page.title        | append : "</td>" -%}
    {%- assign row = row | append : "<td>" | append : page.url          | append : "</td>" -%}
    {%- assign row = row | append : "<td>" | append : page.date         | append : "</td>" -%}
    {%- assign row = row | append : "<td>" | append : page.id           | append : "</td>" -%}
    {%- assign row = row | append : "<td>" | append : page.categories   | append : "</td>" -%}
    {%- assign row = row | append : "<td>" | append : page.tags         | append : "</td>" -%}
    {%- assign row = row | append : "<td>" | append : page.dir          | append : "</td>" -%}
    {%- assign row = row | append : "<td>" | append : page.name         | append : "</td>" -%}
    {%- assign row = row | append : "<td>" | append : page.path         | append : "</td>" -%}
    {%- assign row = row | append : "<td>" | append : page.next.url     | append : "</td>" -%}
    {%- assign row = row | append : "<td>" | append : page.previous.url | append : "</td>" -%}
    {%- assign row = row | append : "</tr>" -%}
    {{ row }}
    {{ "" }}
{%- endfor -%}
  </tbody>
</table>
```


### site.html_pages
- 유효한 속성값 : title, url, dir, name, path

소스 파일("/test/files.md")에서 permalink를 "/files.html"로 지정한 경우 다음처럼 표시된다.

- url : /files.html
- dir : /
- name : files.md
- path : test/files.md


#### HTML 페이지 리스트 출력 샘플
```
<table>
  <thead><tr><th>title</th><th>url</th><th>date</th><th>id</th><th>categories</th><th>tags</th><th>dir</th><th>name</th><th>path</th><th>next</th><th>previous</th></tr></thead>
  <tbody>
{%- for page in site.html_pages limit:30 -%}
    {%- assign row = "<tr>" -%}
    {%- assign row = row | append : "<td>" | append : page.title        | append : "</td>" -%}
    {%- assign row = row | append : "<td>" | append : page.url          | append : "</td>" -%}
    {%- assign row = row | append : "<td>" | append : page.date         | append : "</td>" -%}
    {%- assign row = row | append : "<td>" | append : page.id           | append : "</td>" -%}
    {%- assign row = row | append : "<td>" | append : page.categories   | append : "</td>" -%}
    {%- assign row = row | append : "<td>" | append : page.tags         | append : "</td>" -%}
    {%- assign row = row | append : "<td>" | append : page.dir          | append : "</td>" -%}
    {%- assign row = row | append : "<td>" | append : page.name         | append : "</td>" -%}
    {%- assign row = row | append : "<td>" | append : page.path         | append : "</td>" -%}
    {%- assign row = row | append : "<td>" | append : page.next.url     | append : "</td>" -%}
    {%- assign row = row | append : "<td>" | append : page.previous.url | append : "</td>" -%}
    {%- assign row = row | append : "</tr>" -%}
    {{ row }}
    {{ "" }}
{%- endfor -%}
  </tbody>
</table>
```


### site.html_files
Jekyll 문서에서는 <b>"A subset of 'site.static_files' listing those which end in '.html'."</b> 이렇게 설명하고 있지만, 아무런 파일도 표시되지 않고 있다.

#### HTML 파일 리스트 출력 샘플
```
<table>
  <thead><tr><th>title</th><th>url</th><th>date</th><th>id</th><th>categories</th><th>tags</th><th>dir</th><th>name</th><th>path</th><th>next</th><th>previous</th></tr></thead>
  <tbody>
{%- for page in site.html_files limit:30 -%}
    {%- assign row = "<tr>" -%}
    {%- assign row = row | append : "<td>" | append : page.title        | append : "</td>" -%}
    {%- assign row = row | append : "<td>" | append : page.url          | append : "</td>" -%}
    {%- assign row = row | append : "<td>" | append : page.date         | append : "</td>" -%}
    {%- assign row = row | append : "<td>" | append : page.id           | append : "</td>" -%}
    {%- assign row = row | append : "<td>" | append : page.categories   | append : "</td>" -%}
    {%- assign row = row | append : "<td>" | append : page.tags         | append : "</td>" -%}
    {%- assign row = row | append : "<td>" | append : page.dir          | append : "</td>" -%}
    {%- assign row = row | append : "<td>" | append : page.name         | append : "</td>" -%}
    {%- assign row = row | append : "<td>" | append : page.path         | append : "</td>" -%}
    {%- assign row = row | append : "<td>" | append : page.next.url     | append : "</td>" -%}
    {%- assign row = row | append : "<td>" | append : page.previous.url | append : "</td>" -%}
    {%- assign row = row | append : "</tr>" -%}
    {{ row }}
    {{ "" }}
{%- endfor -%}
  </tbody>
</table>
```