let data = JSON.parse(`{
  "ResultCode": "0000",
  "Status": "OK",
  "Data": {
      "Result": {
          "ProcessId": "9139",
          "IsValid": true,
          "Message": "",
          "InsurancePlanCode": "66020",
          "InsuranceName": "新光人壽Enjoy Life旅行平安保險",
          "IsRenewal": false,
          "TargetType": 2,
          "MaxInsuredChildren": 5,
          "PolicyData": {
              "OrderNo": null,
              "NoticeNo": null,
              "ProposerInfo": [
                  {
                      "ID": "X111111111",
                      "Name": "哇哈哈",
                      "Dob": "1986/07/15 00:00:00",
                      "DobDisplay": "民國 75 年 7 月 15 日",
                      "Gender": "1",
                      "MailingAddr": {
                          "Zip": "922",
                          "Street": "通訊地址87",
                          "District": "來義鄉",
                          "City": "屏東縣",
                          "Address": "屏東縣來義鄉通訊地址87"
                      },
                      "PermAddr": {
                          "Zip": "603",
                          "Street": "新戶籍地址7號",
                          "District": "梅山鄉",
                          "City": "嘉義縣",
                          "Address": "嘉義縣梅山鄉新戶籍地址7號"
                      },
                      "Email": "skek1008@skl.com.tw",
                      "Phone": "0952184733",
                      "IsVerified": false
                  }
              ],
              "InsuredInfo": [
                  {
                      "Index": 0,
                      "PersonalData": {
                          "ID": "X111111111",
                          "Name": "哇哈哈",
                          "Dob": "1986/07/15 00:00:00",
                          "DobDisplay": "民國 75 年 7 月 15 日",
                          "Gender": "1",
                          "MailingAddr": null,
                          "PermAddr": null,
                          "Email": "skek1008@skl.com.tw",
                          "Phone": null,
                          "IsVerified": false
                      },
                      "Relation": "1",
                      "BatchDate": "2019-05-09+08:00",
                      "BatchNo": "30",
                      "BeneficiaryQty": 1,
                      "BeneficiaryData": [
                          {
                              "IdNo": "G149377494",
                              "Name": "東東",
                              "Dob": "1987/07/15 00:00:00",
                              "Relationship": "3",
                              "RelationshipDisplay": "父母子女",
                              "ContactNumber": "0987654321",
                              "Address": {
                                  "Zip": "953",
                                  "Street": "和讓我問問看1號",
                                  "District": "延平鄉",
                                  "City": "台東縣",
                                  "Address": "台東縣延平鄉和讓我問問看1號"
                              },
                              "Seq": 0,
                              "Percentage": 0
                          }
                      ],
                      "PrimaryPolicy": {
                          "PlanCode": "66020",
                          "PlanTitle": "新光人壽Enjoy Life旅行平安保險",
                          "Version": "3",
                          "FaceAmt": 500,
                          "MaxCoverage": 800,
                          "ModePrem": 317
                      },
                      "SupplementPolicy": [
                          {
                              "PlanCode": "66021",
                              "PlanTitle": "傷害醫療",
                              "Version": "3",
                              "FaceAmt": 50,
                              "MaxCoverage": 80,
                              "ModePrem": 86
                          },
                          {
                              "PlanCode": "66024",
                              "PlanTitle": "海外突發疾病",
                              "Version": "3",
                              "FaceAmt": 20,
                              "MaxCoverage": 80,
                              "ModePrem": 77
                          }
                      ],
                      "HasAuthRep": false
                  },
                  {
                      "Index": 1,
                      "PersonalData": {
                          "ID": "J196747900",
                          "Name": "死侍",
                          "Dob": "2017/01/01 00:00:00",
                          "DobDisplay": "民國 106 年 1 月 1 日",
                          "Gender": "1",
                          "MailingAddr": null,
                          "PermAddr": null,
                          "Email": null,
                          "Phone": null,
                          "IsVerified": false
                      },
                      "Relation": "3",
                      "BatchDate": "2019-05-09+08:00",
                      "BatchNo": "30",
                      "BeneficiaryQty": 1,
                      "BeneficiaryData": [
                          {
                              "IdNo": "J195002091",
                              "Name": "而我國",
                              "Dob": "1987/07/15 00:00:00",
                              "Relationship": "3",
                              "RelationshipDisplay": "父母子女",
                              "ContactNumber": "0987654321",
                              "Address": {
                                  "Zip": "953",
                                  "Street": "和讓我問問看2號",
                                  "District": "延平鄉",
                                  "City": "台東縣",
                                  "Address": "台東縣延平鄉和讓我問問看2號"
                              },
                              "Seq": 0,
                              "Percentage": 0
                          }
                      ],
                      "PrimaryPolicy": {
                          "PlanCode": "66020",
                          "PlanTitle": "新光人壽Enjoy Life旅行平安保險",
                          "Version": "3",
                          "FaceAmt": 200,
                          "MaxCoverage": 200,
                          "ModePrem": 21
                      },
                      "SupplementPolicy": [
                          {
                              "PlanCode": "66021",
                              "PlanTitle": "傷害醫療",
                              "Version": "3",
                              "FaceAmt": 20,
                              "MaxCoverage": 20,
                              "ModePrem": 35
                          },
                          {
                              "PlanCode": "66024",
                              "PlanTitle": "海外突發疾病",
                              "Version": "3",
                              "FaceAmt": 10,
                              "MaxCoverage": 20,
                              "ModePrem": 41
                          }
                      ],
                      "HasAuthRep": false
                  }
              ],
              "SelfInsured": true,
              "ChildrenNo": 1,
              "TravelType": "2",
              "TravelCountry": "8",
              "EtcCountry": null,
              "InsStartDate": "2019/05/10 01:49:48",
              "TravelDay": 10,
              "InsType": "1",
              "EmergencyContactName": "十大歌手的",
              "EmergencyContactTel": "(02)22322232",
              "EmergencyContactAddr": {
                  "Zip": "263",
                  "Street": "保時之保單寄送地址1號",
                  "District": "壯圍鄉",
                  "City": "宜蘭縣",
                  "Address": "宜蘭縣壯圍鄉保時之保單寄送地址1號"
              },
              "MailingType": null,
              "MailingAddr": null,
              "SaveMailingAddress": false,
              "PayType": null,
              "TotalPremium": 577,
              "VisitTimeInd": "000",
              "VisitTimeMorning": null,
              "VisitTimeAfternoon": null,
              "VisitTimeEvening": null,
              "MailType": "2",
              "NewNo": "N20190509000036",
              "TravelTypeDisplay": "國外",
              "InsTypeDisplay": "簡訊OTP動態密碼驗證",
              "InsStartDisplay": "108 年 5 月 10 日 01:49 時",
              "InsEndDisplay": "108 年 5 月 20 日 01:49 時",
              "TravelPlaceDisplay": "國外-韓國",
              "TotalPremiumDisplay": "NT$577",
              "EquipmentCode": "01",
              "CollectCode": null,
              "AcceptBirthdayPresent": null,
              "EmployeeNo": "",
              "SalespersonName": null,
              "OtpSendTime": null,
              "OtpValidateTime": null,
              "PaymentPreferredAccount": false,
              "Rewnewal": false,
              "UnfinishedID": null,
              "StepStatus": "FILLIN",
              "LastUpdateTime": "2019/05/09 13:50:05",
              "EnterpriseCode": null
          },
          "AgreementTitle": "『新光人壽Enjoy Life旅行平安保險商品說明』、『新光人壽Enjoy Life旅行平安保險保險單條款』、『新光人壽Enjoy Life傷害醫療保險給付附加條款』、『新光人壽Enjoy Life海外突發疾病健康保險附加條款』、『新光人壽網路投保旅行平安險投保人須知』、『新光人壽網路投保旅行平安險要保書填寫說明』、『蒐集、處理及利用個人資料告知事項』、『父母為7歲以下未成年子女投保告知』",
          "AgreementVerTitle": "新光人壽Enjoy Life旅行平安保險商品說明(18),新光人壽Enjoy Life旅行平安保險保險單條款(15),新光人壽Enjoy Life傷害醫療保險給付附加條款(5),新光人壽Enjoy Life海外突發疾病健康保險附加條款(4),新光人壽網路投保旅行平安險投保人須知(10),新光人壽網路投保旅行平安險要保書填寫說明(8),蒐集、處理及利用個人資料告知事項(53),父母為7歲以下未成年子女投保告知(1)",
          "VerifiedCoverage": [
              1000,
              900,
              800,
              700,
              600,
              500,
              400,
              300,
              200,
              100
          ],
          "CurrentCoverage": [
              800,
              700,
              600,
              500,
              400,
              300,
              200,
              100
          ],
          "IncreaseCoverage": false,
          "UserEmergencyContactName": "死侍",
          "UserEmergencyContactPhone": "(02)8825252",
          "UserEmergenctContactAddress": {
              "Zip": "302",
              "Street": "笑裡藏刀一段78號",
              "District": "竹北市",
              "City": "新竹縣",
              "Address": "新竹縣竹北市笑裡藏刀一段78號"
          },
          "VerificationUrl": null,
          "ConvenientStorePayment": false,
          "revenue": 700,
          "price": 0
      },
      "IsSuccess": true,
      "Code": null,
      "Message": null,
      "Exceptions": null
  }
}`)

export {
  data
}
