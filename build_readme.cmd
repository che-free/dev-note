echo off

cls

echo.
echo README.md ������ �ٽ� �����մϴ�.
echo.
pause

echo.
echo.

rem cmd ���� ��η� �̵�
pushd %~dp0

node build_readme.js

echo.
echo.
pause
