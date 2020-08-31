dgit은 대구소프트웨어고등학교의 Github기여도를 표시합니다

⚠️ 학생의 동기부여 목적으로 제작되었습니다.

## 안내사항
- 대구소프트웨어고등학교 재학생 혹은 졸업생 대상입니다  
- 사용자가 본인의 ID를 등록하면 승인 후 표시합니다
- 정확한 정보를 위해 신청시 이름을 입력해주세요
- 비공개 저장소를 기여도로 표시하면 모든 기여도를 확인할 수 있습니다(Github설정)
- 사용자 정보 수정 및 삭제는 해당 저장소의 이슈 혹은 직접 연락바랍니다
- 개선사항, 오류는 해당 저장소의 이슈를 이용해주세요

## 구동 방식

![image](https://user-images.githubusercontent.com/49791336/91555821-adcf3880-e96c-11ea-8879-777e4c4577d3.png)

Github과 하루 한번 동기화됩니다. 동기화된 데이터는 DB에 저장후 요청 시 저장된 데이터를 응답합니다

> 변경  
> __사용자의 기여도, Bio등의 데이터는 1일이 지난후 적용됩니다.__

__사용자의 기여도, Bio, 주간 순위등의 데이터는 `8시`, `10시`, `12시`, `14`, `16시`, `18시`, `20시`에 동기화 됩니다__


## 사용 기술

### 프론트엔드
![image](https://user-images.githubusercontent.com/49791336/91555834-b293ec80-e96c-11ea-9c0d-5b11dcc7c7c7.png)

ReactJS, Mobxs, TypeScript를 사용하여 프론트엔드를 제작하였습니다

### 백엔드

![image](https://user-images.githubusercontent.com/49791336/91555775-985a0e80-e96c-11ea-97bb-0ff8dbb87ee4.png)

NestJS, TypeScrip, TypeORM을 통하여 백엔드를 제작하였습니다. PostgreSQL을 사용하였고 Docker와 Nginx를 통하여 배포하였습니다
