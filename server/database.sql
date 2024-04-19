CREATE DATABASE QL_ThueXeOto;
GO

USE QL_ThueXeOto;
GO

CREATE TABLE CarProduct
(
    Id INT NOT NULL PRIMARY KEY IDENTITY,
    Tenxe [NVARCHAR](100) NOT NULL,
    Socho INT NOT NULL
    -- specify more columns here
);
GO

