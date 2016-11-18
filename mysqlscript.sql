CREATE SCHEMA `persontbl` ;
CREATE TABLE `persontbl`.`personinfo` (
  `personinfoid` INT NOT NULL AUTO_INCREMENT,
  `firstname` VARCHAR(45) NULL,
  `lastname` VARCHAR(45) NULL,
  `phone` VARCHAR(9) NULL,
  `address` VARCHAR(45) NULL,
  `email` VARCHAR(45) NULL,
  `gender` VARCHAR(45) NULL,
  PRIMARY KEY (`personinfoid`),
  UNIQUE INDEX `personinfoid_UNIQUE` (`personinfoid` ASC));

INSERT INTO `persontbl`.`personinfo` (`firstname`, `lastname`, `phone`, `address`, `email`, `gender`) VALUES ('John', 'Dow', '1231231234', 'main', 'j@email.com', 'male');
INSERT INTO `persontbl`.`personinfo` (`firstname`, `lastname`, `phone`, `address`, `email`, `gender`) VALUES ('Victoria', 'Calinete', '1231231233', 'Dallas', 'v@email.com', 'female');
INSERT INTO `persontbl`.`personinfo` (`firstname`, `lastname`, `phone`, `address`, `email`, `gender`) VALUES ('Ashley', 'Summer', '2222222222', 'Irving', 'a@email.om', 'female');
INSERT INTO `persontbl`.`personinfo` (`firstname`, `lastname`, `phone`, `address`, `email`, `gender`) VALUES ('Sommer', 'Rain', '3333333333', 'Carrolton', 's@email.com', 'female');
INSERT INTO `persontbl`.`personinfo` (`firstname`, `lastname`, `phone`, `address`, `email`, `gender`) VALUES ('Jessica', 'Lith', '4444444444', 'DNT', 'j@email.com', 'female');


CREATE TABLE `persontbl`.`account` (
  `accountid` INT NOT NULL AUTO_INCREMENT,
  `personid` INT NOT NULL,
  `savingaccount` VARCHAR(45) NULL,
  `checkingaccount` VARCHAR(45) NULL,
  PRIMARY KEY (`accountid`),
  UNIQUE INDEX `accountid_UNIQUE` (`accountid` ASC),
  INDEX `personaccountkey_idx` (`personid` ASC),
  CONSTRAINT `personaccountkey`
    FOREIGN KEY (`personid`)
    REFERENCES `persontbl`.`personinfo` (`personinfoid`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);

INSERT INTO `persontbl`.`account` (`personid`, `savingaccount`, `checkingaccount`, `accountnumber`) VALUES ('1', '12000', '60', '111222');

INSERT INTO `persontbl`.`account` (`personid`, `savingaccount`, `checkingaccount`, `accountnumber`) VALUES ('1', '12000', '60', '111222');
INSERT INTO `persontbl`.`account` (`personid`, `savingaccount`, `checkingaccount`, `accountnumber`) VALUES ('2', '20000', '1000', '123456');
INSERT INTO `persontbl`.`account` (`personid`, `savingaccount`, `checkingaccount`, `accountnumber`) VALUES ('3', '12333', '121', '453421');
INSERT INTO `persontbl`.`account` (`personid`, `savingaccount`, `checkingaccount`, `accountnumber`) VALUES ('4', '23434', '342', '546323');
INSERT INTO `persontbl`.`account` (`personid`, `savingaccount`, `checkingaccount`, `accountnumber`) VALUES ('5', '54723', '22', '342234');

