# MySQL SQL code snippets

## 날짜 처리 SQL
```sql
-- ----------------------------------------------------------
-- 날짜 형식
-- ----------------------------------------------------------
SELECT CURRENT_TIMESTAMP()
      ,UTC_TIMESTAMP()
      ,DATE_FORMAT(CURRENT_TIMESTAMP(), '%Y-%m-%d %H:%i:%s')
      ,DATE_FORMAT(CURRENT_TIMESTAMP(), '%Y%m%d%H%i%s')
      ,DATE_FORMAT(CURRENT_TIMESTAMP(), '%Y-%m-%dT%H:%i:%sZ')
      ,DATE_FORMAT(CURRENT_TIMESTAMP(), '%Y-%m-%d %H:%i:%s')
      ,DATE_FORMAT(NOW(6),              '%Y-%m-%d %H:%i:%s.%f')
      ,STR_TO_DATE('2020-12-31 23:59:59', '%Y-%m-%d %H:%i:%s')
      ,STR_TO_DATE('20201231235959', '%Y%m%d%H%i%s')
      ,STR_TO_DATE('2020-12-31T23:59:59Z', '%Y-%m-%dT%H:%i:%sZ')
      ,DATE_FORMAT(CURRENT_TIMESTAMP(), '%Y-%m-%d %H:%i:%s') AS NOW_UTC
      ,DATE_FORMAT(DATE_ADD(CURRENT_TIMESTAMP(), INTERVAL 9 HOUR), '%Y-%m-%d %H:%i:%s') AS NOW_KST
;


-- ----------------------------------------------------------
-- 날짜 타임존 변환
-- ----------------------------------------------------------
SELECT CONVERT_TZ(NOW(), @@GLOBAL.TIME_ZONE, '+00:00') AS NOW_UTC
      ,CONVERT_TZ(NOW(), @@SESSION.TIME_ZONE, '+00:00') AS NOW_UTC
;


-- ----------------------------------------------------------
-- 날짜에 시간 더하기
-- ----------------------------------------------------------
SELECT CURRENT_TIMESTAMP()
      ,DATE_ADD(CURRENT_TIMESTAMP(), INTERVAL 1 DAY)
      ,DATE_ADD(CURRENT_TIMESTAMP(), INTERVAL 1 HOUR)
      ,DATE_ADD(CURRENT_TIMESTAMP(), INTERVAL 1 MINUTE)
      ,DATE_ADD(CURRENT_TIMESTAMP(), INTERVAL 1 SECOND)
;


-- ----------------------------------------------------------
-- ISO 8601 문자열을 날짜로
-- ----------------------------------------------------------
SELECT CAST('2020-06-03' AS DATETIME)
      ,CAST('2020-06-03T12:59:59.111Z' AS DATETIME)         -- 1/1000 초 반올림(?)
      ,CAST('2020-06-03T12:59:59.999Z' AS DATETIME)         -- 1/1000 초 반올림(?)
      ,CAST('2020-06-03T00:09:00Z' AS DATETIME)
      ,CAST('2020-06-03T00:09:00+00:00' AS DATETIME)
      ,CAST('2020-06-03T05:09:00.847+09:00' AS DATETIME)    -- Offset 적용 안됨
      ,CAST('2020-06-03T00:09:00+09:00' AS DATETIME)        -- Offset 적용 안됨
;
```
