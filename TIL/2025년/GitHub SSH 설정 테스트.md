# GitHub SSH 설정 테스트


### GitHub SSH 설정
- 새 SSH 키 생성 및 ssh-agent에 추가<br>
    https://docs.github.com/ko/enterprise-cloud@latest/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent
- GitHub > SSH 문제 해결 > 오류: 권한이 거부됨(publickey)<br>
    https://docs.github.com/ko/enterprise-cloud@latest/authentication/troubleshooting-ssh/error-permission-denied-publickey
- HTTPS 포트를 통해 SSH 사용<br>
    https://docs.github.com/ko/enterprise-cloud@latest/authentication/troubleshooting-ssh/using-ssh-over-the-https-port


### Git Bash에서 테스트
```bash
# 연결 테스트 (id_rsa 등 기본 Private Key 사용)
$ ssh -T git@github.com

# 연결 테스트 디버그 로그 출력
$ ssh -vT git@github.com

# 연결 테스트 (Private Key 파일 지정)
$ ssh -T git@github.com -i /c/Users/<user-id>/.ssh/id_rsa_test

# 연결 테스트 디버그 로그 출력
$ ssh -vT git@github.com -i /c/Users/<user-id>/.ssh/id_rsa_test
```


### CMD에서 테스트
```dos
rem 연결 테스트 (id_rsa 등 기본 Private Key 사용)
ssh -T git@github.com

rem 연결 테스트 디버그 로그 출력
ssh -vT git@github.com

# 연결 테스트 (Private Key 파일 지정)
ssh -T git@github.com -i c:\Users\<user-id>\.ssh\id_rsa_test

rem 연결 테스트 디버그 로그 출력
ssh -vT git@github.com -i c:\Users\<user-id>\.ssh\id_rsa_test
```

