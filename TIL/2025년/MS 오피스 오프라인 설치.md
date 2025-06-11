# MS 오피스 오프라인 설치


## 방법1) 설치 이미지 파일 이용
구글에서 Office Product IDs(ProPlus2019Retail, ProPlus2021Retail, ...)로 검색하면 설치용 이미지 파일(*.img)을 쉽게 구할 수 았다.

### 이미지 파일명
- Office 2016 Standard : SW_DVD5_Office_2016_W32_Korean_MLF_X20-41383.ISO
- Office 2016 Professional Plus : SW_DVD5_Office_Professional_Plus_2016_W32_Korean_MLF_X20-41358.ISO


## 방법2) 오프라인 설치 파일 만들기
아래 방법으로 오프라인 설치 파일을 만든다.


## 오프라인 설치 파일 준비
1. Office Deployment Tool(ODT) 다운로드<br>
    https://www.microsoft.com/en-us/search/explore?q=Office+Deployment+Tool
1. C:\ODT 디렉토리 생성
1. ODT 설치 프로그램(officedeploymenttool_18730-20142.exe) 실행하고 C:\ODT 경로 선택
1. 설정 파일 생성<br>
    C:\ODT\config.xml<br>
    > [Configuration options for the Office Deployment Tool](https://learn.microsoft.com/en-us/microsoft-365-apps/deploy/office-deployment-tool-configuration-options)
    ```xml
    <Configuration>
        <Add OfficeClientEdition="32" Channel="Current">
            <Product ID="HomeBusiness2019Retail">
                <Language ID="ko-kr" />
            </Product>
        </Add>
    </Configuration>
    ```
1. CMD 실행 후 C:\ODT\ 디렉토리에서 아래 명령으로 다운로드 실행
    ```dos
    setup /download config.xml
    ```

> 아래 사이트에서 설정 파일을 생성 할 수 있다.<br>
> https://config.office.com/deploymentsettings



## 오프라인 설치
1. C:\ODT 디렉토리를 다른 PC로 복사하고 아래 명령으로 오피스 설치
    ```dos
    setup /configure config.xml
    ```


## 참고) 주요 Office Product IDs
- Office 2024
    - Home2024Retail
    - HomeBusiness2024Retail
    - Standard2024Volume
    - Professional2024Retail
    - ProPlus2024Retail
    - ProPlus2024Volume
- Office 2021
    - Personal2021Retail
    - HomeStudent2021Retail
    - HomeBusiness2021Retail
    - Standard2021Volume
    - Professional2021Retail
    - ProPlus2021Retail
    - ProPlus2021Volume
- Office 2019
    - Personal2019Retail
    - HomeStudent2019Retail
    - HomeBusiness2019Retail
    - Standard2019Volume
    - Professional2019Retail
    - ProPlus2019Retail
    - ProPlus2019Volume
- Office 2016
    - HomeStudentRetail
    - HomeBusinessRetail
    - ProfessionalRetail
    - ProPlusRetail


## Office Deployment Tool(ODT)
- Use the Office offline installer<br>
    https://support.microsoft.com/en-us/office/use-the-office-offline-installer-f0a85fe7-118f-41cb-a791-d59cef96ad1c
- Language Accessory Pack for Microsoft 365<br>
    https://support.microsoft.com/en-us/office/language-accessory-pack-for-microsoft-365-82ee1236-0f9a-45ee-9c72-05b026ee809f#id0ebbf=office_2019
- Configuration options for the Office Deployment Tool<br>
    https://learn.microsoft.com/en-us/microsoft-365-apps/deploy/office-deployment-tool-configuration-options
- Deploy Office 2019 (for IT Pros)<br>
    https://learn.microsoft.com/en-us/office/2019/deploy
- List of Product IDs that are supported by the Office Deployment Tool for Click-to-Run<br>
    https://learn.microsoft.com/en-us/microsoft-365/troubleshoot/installation/product-ids-supported-office-deployment-click-to-run


## 참고
- Need Office 2019 Professional Plus offline isntaller<br>
    https://learn.microsoft.com/en-us/answers/questions/509099/need-office-2019-professional-plus-offline-isntall
    https://officecdn.microsoft.com/db/492350F6-3A01-4F97-B9C0-C7C6DDF67D60/media/en-US/ProPlus2019Retail.img


