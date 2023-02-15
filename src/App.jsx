import { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';

function App() {
  const [usingName, setUsingName] = useState('');
  const [bornedName, setBornedName] = useState('');
  const [sex, setSex] = useState('');
  const [nation, setNation] = useState('');
  const [religion, setReligion] = useState('');
  const [birth, setBirth] = useState('');
  const [born, setBorn] = useState('');
  const [countrySide, setCountryside] = useState('');
  const [stay, setStay] = useState('');
  const [traditionLevel, setTraditionLevel] = useState('');
  const [job, setJob] = useState('');
  const [actualJob, setActualJob] = useState('');
  const [jobJourney, setJobJourney] = useState('');
  const [gift, setGift] = useState('');
  const [discipline, setDiscipline] = useState('');
  const [fatherName, setFatherName] = useState('');
  const [fatherYear, setFatherYear] = useState('');
  const [fatherYearDie, setFatherYearDie] = useState('');
  const [fatherCountry, setFatherCountry] = useState('');
  const [fatherPlaceDie, setFatherPlaceDie] = useState('');
  const [fatherJobDie, setFatherJobDie] = useState('');
  const [motherName, setMotherName] = useState('');
  const [motherYear, setMotherYear] = useState('');
  const [motherPlace, setMotherPlace] = useState('');
  const [motherCountry, setMotherCountry] = useState('');
  const [motherJob, setMotherJob] = useState('');
  const [brotherSisterNumber, setBrotherSisterNumber] = useState('');
  const [fatherWifeName, setFatherWifeName] = useState('');
  const [fatherWifeCountry, setFatherWifeCountry] = useState('');
  const [fatherWifeYear, setFatherWifeYear] = useState('');
  const [fatherWifePlace, setFatherWifePlace] = useState('');
  const [fatherWifeJob, setFatherWifeJob] = useState('');
  const [motherWifeName, setMotherWifeName] = useState('');
  const [motherWifeYear, setMotherWifeYear] = useState('');
  const [motherWifeCountry, setMotherWifeCountry] = useState('');
  const [motherWifePlace, setMotherWifePlace] = useState('');
  const [motherWifeJob, setMotherWifeJob] = useState('');
  const [wifeName, setWifeName] = useState('');
  const [wifeYear, setWifeYear] = useState('');
  const [wifeJob, setWifeJob] = useState('');
  const [wifePlace, setWifePlace] = useState('');
  const [wifeCountry, setWifeCountry] = useState('');
  const [wifeChildName, setWifeChildName] = useState(['', '']);
  const [wiffeChildYear, setWifeChildYear] = useState(['', '']);
  const [identify, setIndentify] = useState([]);
  const [introPeople, setIntroPeople] = useState(['', '']);
  const [peopleJoin, setPeopleJoin] = useState(0);
  const [peopleOff, setPeopleOff] = useState(0);
  const [votePeople, setVotePeople] = useState(0);
  const [partyMem, setPartyMem] = useState(0);
  const [temPeople, setTemPeople] = useState(0);
  const [partyIn, setPartyIn] = useState(0);
  const [partyOut, setPartyOut] = useState(0);
  const [officialPeo, setOfficalPeo] = useState(0);
  const [temIn, setTemIn] = useState(0);
  const [vote, setVote] = useState(0);
  // const [highPeople, setHeightPeople] = useState(0);
  const [hightJoin, setHighJoin] = useState(0);
  const [hightOff, setHighOff] = useState(0);
  // const [voteHigh, setVoteHigh] = useState(0);
  const [save, setSave] = useState(false);
  const [explain, setExplain] = useState('');
  const [yes, setYes] = useState('');
  const [no, setNo] = useState('');
  const [comment, setComment] = useState('');
  function myPrint(myfrm) {
    var printdata = document.getElementById(myfrm);
    let newwin = window.open('');
    // newwin.document.write(
    //   `<style>#title-1 {text-align: left; width: 50%} #title-2{text-align: left; width: 50%}</style>`
    // );
    newwin.document.write(printdata.outerHTML);
    newwin.print();
    newwin.close();
  }
  // function ExportToWord(element, filename = '') {
  //   var preHtml =
  //     "<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'><head><meta charset='utf-8'><title>Export HTML To Doc</title></head><body>";
  //   var postHtml = '</body></html>';
  //   var html = preHtml + document.getElementById(element).innerHTML + postHtml;

  //   var blob = new Blob(['\ufeff', html], {
  //     type: 'application/msword',
  //   });

  //   // Specify link url
  //   var url =
  //     'data:application/vnd.ms-word;charset=utf-8,' + encodeURIComponent(html);

  //   // Specify file name
  //   filename = filename ? filename + '.doc' : 'document.doc';

  //   // Create download link element
  //   var downloadLink = document.createElement('a');

  //   document.body.appendChild(downloadLink);

  //   if (navigator.msSaveOrOpenBlob) {
  //     navigator.msSaveOrOpenBlob(blob, filename);
  //   } else {
  //     // Create a link to the file
  //     downloadLink.href = url;

  //     // Setting the file name
  //     downloadLink.download = filename;

  //     //triggering the function
  //     downloadLink.click();
  //   }

  //   document.body.removeChild(downloadLink);
  // }
  return (
    <div id='App' className='flex h-screen flex-col py-2 px-2'>
      <table
        width={600}
        id='content'
        className=' overflow-y-auto p-2  mx-auto w-full flex-1 mb-10 bg-blue-400'
      >
        <tbody>
          <tr className=''>
            <td id='title-1' style={{ textAlign: 'center', width: '50%' }}>
              <p>QUẬN ỦY THANH XUÂN</p>
              <p className='font-bold'>BAN TỔ CHỨC</p>
              <p>*</p>
            </td>
            <td
              // align='right'
              // className='underline w-1/2 font-bold text-center'
              style={{
                // paddingLeft: '100px',
                textAlign: 'center',
                // width: '50%',
                whiteSpace: 'nowrap',
                verticalAlign: 'baseline',
                textDecoration: 'underline',
                fontWeight: 'bold',
                textIndent: '250px',
              }}
            >
              ĐẢNG CỘNG SẢN VIỆT NAM
            </td>
          </tr>
          <tr style={{ textAlign: 'right' }}>
            <td colSpan={'2'}>Thanh Xuân, ngày .... tháng 12 năm 2022</td>
          </tr>
          <br />
          <tr style={{ height: '20px' }}></tr>
          <tr
            style={{
              textAlign: 'center',
              fontWeight: 'bold',
              paddingLeft: '50px',
            }}
          >
            <td width={600} colSpan={2} style={{ textIndent: '50px' }}>
              <p>TRÍCH SAO</p>
              <p>Hồ sơ đề nghị kết nạp đảng viên</p>
              <p>thuộc Đảng bộ Khối Doanh nghiệp quận Thanh Xuân</p>
              <p>-----</p>
            </td>
          </tr>
          <tr>
            <td colSpan={'2'} style={{ fontWeight: 'bold' }}>
              I.THÔNG TIN QUẦN CHÚNG
            </td>
          </tr>
          <tr>
            <td colSpan={'2'} style={{ fontWeight: 'bold' }}>
              1.Sơ yếu lý lịch
            </td>
          </tr>
          <tr>
            <td>
              Họ và tên đang dùng:{' '}
              <b style={{ padding: '0 30px' }}>
                {save ? (
                  usingName
                ) : (
                  <input
                    id='a1'
                    type={'text'}
                    value={usingName}
                    autoFocus
                    onChange={(e) => setUsingName(e.target.value)}
                  />
                )}
                {/* Hoàng Văn Quyết */}
              </b>
            </td>
            <td style={{ textAlign: 'center' }}>
              -
              {save ? (
                sex
              ) : (
                <input
                  id='a2'
                  type={'text'}
                  value={sex}
                  onChange={(e) => setSex(e.target.value)}
                />
              )}
            </td>
          </tr>
          <tr>
            <td>
              Họ tên khai sinh:{' '}
              <b style={{ padding: '0 65px' }}>
                {save ? (
                  bornedName
                ) : (
                  <input
                    type={'text'}
                    value={bornedName}
                    onChange={(e) => setBornedName(e.target.value)}
                  />
                )}
                {/* Hoàng Văn Quyết */}
              </b>
            </td>
            <td></td>
          </tr>
          <tr>
            <td>
              Dân tộc:
              <span style={{ padding: '0 30px' }}>
                {save ? (
                  nation
                ) : (
                  <input
                    type={'text'}
                    value={nation}
                    onChange={(e) => setNation(e.target.value)}
                  />
                )}
              </span>
            </td>
            <td>
              Tôn giáo:{' '}
              <span style={{ padding: '0 30px' }}>
                {save ? (
                  religion
                ) : (
                  <input
                    type={'text'}
                    value={religion}
                    onChange={(e) => setReligion(e.target.value)}
                  />
                )}
              </span>
            </td>
          </tr>
          <tr>
            <td>
              Ngày,tháng,năm sinh:
              <span style={{ padding: '0 30px' }}>
                {save ? (
                  birth
                ) : (
                  <input
                    type={'text'}
                    value={birth}
                    onChange={(e) => setBirth(e.target.value)}
                  />
                )}
              </span>
            </td>
            <td>
              Nơi sinh:{' '}
              <span style={{ padding: '0 30px' }}>
                {save ? (
                  born
                ) : (
                  <input
                    type={'text'}
                    value={born}
                    onChange={(e) => setBorn(e.target.value)}
                  />
                )}
              </span>
            </td>
          </tr>
          <tr>
            <td>
              Quê quán:
              <span style={{ padding: '0 30px' }}>
                {save ? (
                  countrySide
                ) : (
                  <input
                    type={'text'}
                    value={countrySide}
                    onChange={(e) => setCountryside(e.target.value)}
                  />
                )}
              </span>
            </td>
            <td></td>
          </tr>
          <tr>
            <td>
              Nơi cư trú:
              {save ? (
                <span style={{ padding: '0 30px' }}>{stay}</span>
              ) : (
                <input
                  type={'text'}
                  value={stay}
                  onChange={(e) => setStay(e.target.value)}
                />
              )}
            </td>
            <td></td>
          </tr>
          <tr>
            <td>
              Trình độ văn hóa:
              {save ? (
                <span style={{ padding: '0 30px' }}>{traditionLevel}/12</span>
              ) : (
                <>
                  <input
                    type={'number'}
                    min={0}
                    max={12}
                    value={traditionLevel}
                    onChange={(e) => setTraditionLevel(e.target.value)}
                  />
                  <span className='ml-2'>/12</span>
                </>
              )}
            </td>
            <td>
              Chuyêt môn:{' '}
              {save ? (
                <span style={{ padding: '0 30px' }}>{job}</span>
              ) : (
                <input
                  type={'text'}
                  value={job}
                  onChange={(e) => setJob(e.target.value)}
                />
              )}
            </td>
          </tr>
          <tr>
            <td>
              Nghề nghiệp
              {save ? (
                <span
                  style={{ padding: '0 30px' }}
                  className='whitespace-pre-line'
                >
                  {actualJob}
                </span>
              ) : (
                <input
                  type={'text'}
                  value={actualJob}
                  onChange={(e) => setActualJob(e.target.value)}
                />
              )}
            </td>
            <td></td>
          </tr>
          <tr>
            <td colSpan={'2'}>
              <b>* Quá trình công tác</b>
            </td>
          </tr>
          <tr>
            <td
              colSpan={'2'}
              className='whitespace-pre-line'
              style={{ whiteSpace: 'pre-line' }}
            >
              {!save ? (
                <textarea
                  rows={8}
                  className='w-full'
                  type={'text'}
                  value={jobJourney}
                  onChange={(e) => {
                    setJobJourney(e.target.value);
                  }}
                ></textarea>
              ) : (
                jobJourney
              )}
            </td>
          </tr>
          {/* <tr>
            <td colSpan={'2'}>
              Từ 2015-2018: Phóng viên Tạp chí Thương trường
            </td>
          </tr>
          <tr>
            <td colSpan={'2'}>
              Từ 2019-2020: Biên tập viên, phống viên Tạp chí Thông tin và phát
              triển
            </td>
          </tr>
          <tr>
            <td colSpan={'2'}>
              Từ 6/2020 đến nay: Phóng viên Tạp chí văn hóa doanh nghiệp Việt
              Nam
            </td>
          </tr> */}
          <tr>
            <td colSpan={'2'}>
              <b>*Khen thưởng, kỷ luật</b>
            </td>
          </tr>
          <tr>
            <td colSpan={'2'}>
              -Khen thưởng:
              {save ? (
                gift
              ) : (
                <input
                  type={'text'}
                  value={gift}
                  onChange={(e) => setGift(e.target.value)}
                />
              )}
            </td>
          </tr>
          <tr>
            <td colSpan={'2'}>
              -Kỷ luật:{' '}
              {save ? (
                discipline
              ) : (
                <input
                  type={'text'}
                  value={discipline}
                  onChange={(e) => setDiscipline(e.target.value)}
                />
              )}
            </td>
          </tr>
          <tr>
            <td>
              <b>2. Hoàn cảnh gia đình</b>
            </td>
          </tr>
          <tr>
            <td>
              <b>- Bố đẻ</b>:{' '}
              {save ? (
                fatherName
              ) : (
                <input
                  type={'text'}
                  value={fatherName}
                  onChange={(e) => setFatherName(e.target.value)}
                />
              )}
            </td>
            <td>
              {' '}
              -Năm sinh:{' '}
              {save ? (
                fatherYear
              ) : (
                <input
                  type={'number'}
                  value={fatherYear}
                  onChange={(e) => setFatherYear(e.target.value)}
                />
              )}{' '}
              {'('}{' '}
              {save && fatherYearDie !== '' && <>mất năm {fatherYearDie}</>}
              {!save && (
                <>
                  mất năm{' '}
                  <input
                    type={'number'}
                    value={fatherYearDie}
                    onChange={(e) => setFatherYearDie(e.target.value)}
                  />
                </>
              )}
              {')'}
            </td>
          </tr>
          <tr>
            <td>
              Quê quán:
              {save ? (
                fatherCountry
              ) : (
                <input
                  className='w-3/4'
                  type={'number'}
                  value={fatherCountry}
                  onChange={(e) => setFatherCountry(e.target.value)}
                />
              )}{' '}
            </td>
          </tr>
          <tr>
            <td colSpan={2}>
              {' '}
              Nơi ở trước khi mất:{' '}
              {save ? (
                fatherPlaceDie
              ) : (
                <input
                  className='w-3/4'
                  type={'text'}
                  value={fatherPlaceDie}
                  onChange={(e) => setFatherPlaceDie(e.target.value)}
                />
              )}{' '}
            </td>
          </tr>
          <tr>
            <td colSpan={2}>
              {' '}
              Nghề nghiệp trước khi mất:{' '}
              {save ? (
                fatherJobDie
              ) : (
                <input
                  className='w-3/4'
                  type={'text'}
                  value={fatherJobDie}
                  onChange={(e) => setFatherJobDie(e.target.value)}
                />
              )}{' '}
            </td>
          </tr>
          <tr>
            <td>
              <b>- Mẹ đẻ:</b>{' '}
              {save ? (
                motherName
              ) : (
                <input
                  type={'number'}
                  value={motherName}
                  onChange={(e) => setMotherName(e.target.value)}
                />
              )}{' '}
            </td>
            <td>
              {' '}
              - Năm sinh:
              {save ? (
                motherYear
              ) : (
                <input
                  type={'number'}
                  value={motherYear}
                  onChange={(e) => setMotherYear(e.target.value)}
                />
              )}
            </td>
          </tr>
          <tr>
            <td colSpan={2}>
              {' '}
              Quê quán:{' '}
              {save ? (
                motherCountry
              ) : (
                <input
                  className='w-3/4'
                  type={'text'}
                  value={motherCountry}
                  onChange={(e) => setMotherCountry(e.target.value)}
                />
              )}
            </td>
          </tr>
          <tr>
            <td>
              Nơi ở hiện nay:{' '}
              {save ? (
                motherPlace
              ) : (
                <input
                  className='w-3/4'
                  type={'text'}
                  value={motherPlace}
                  onChange={(e) => setMotherPlace(e.target.value)}
                />
              )}
            </td>
          </tr>
          <tr>
            <td>
              {' '}
              Nghề nghiệp:{' '}
              {save ? (
                motherJob
              ) : (
                <input
                  className='w-3/4'
                  type={'text'}
                  value={motherJob}
                  onChange={(e) => setMotherJob(e.target.value)}
                />
              )}
            </td>
          </tr>
          <tr>
            <td>
              <b> - Anh chị em ruột:</b> Gia đình có{' '}
              {save ? (
                brotherSisterNumber
              ) : (
                <input
                  className=''
                  type={'number'}
                  value={brotherSisterNumber}
                  onChange={(e) => setBrotherSisterNumber(e.target.value)}
                />
              )}{' '}
              chị em
            </td>
          </tr>
          <tr>
            <td>
              {' '}
              <b>- Bố vợ:</b>{' '}
              {save ? (
                fatherWifeName
              ) : (
                <input
                  className=''
                  type={'text'}
                  value={fatherWifeName}
                  onChange={(e) => setFatherWifeName(e.target.value)}
                />
              )}{' '}
            </td>
            <td>
              {' '}
              - Năm sinh:{' '}
              {save ? (
                fatherWifeYear
              ) : (
                <input
                  className=''
                  type={'text'}
                  value={fatherWifeYear}
                  onChange={(e) => setFatherWifeYear(e.target.value)}
                />
              )}{' '}
            </td>
          </tr>
          <tr>
            <td>
              Quê quán:{' '}
              {save ? (
                fatherWifeCountry
              ) : (
                <input
                  className='w-3/4'
                  type={'text'}
                  value={fatherWifeCountry}
                  onChange={(e) => setFatherWifeCountry(e.target.value)}
                />
              )}{' '}
            </td>
          </tr>
          <tr>
            <td>
              {' '}
              Nơi ở hiện nay:{' '}
              {save ? (
                fatherWifePlace
              ) : (
                <input
                  className='w-3/4'
                  type={'text'}
                  value={fatherWifePlace}
                  onChange={(e) => setFatherWifePlace(e.target.value)}
                />
              )}{' '}
            </td>
          </tr>
          <tr>
            <td>
              {' '}
              Nghề nghiệp:{' '}
              {save ? (
                fatherWifeJob
              ) : (
                <input
                  className='w-3/4'
                  type={'text'}
                  value={fatherWifeJob}
                  onChange={(e) => setFatherWifeJob(e.target.value)}
                />
              )}{' '}
            </td>
          </tr>
          <tr>
            <td>
              <b>- Mẹ vợ:</b>{' '}
              {save ? (
                motherWifeName
              ) : (
                <input
                  className='w-3/4'
                  type={'text'}
                  value={motherWifeName}
                  onChange={(e) => setMotherWifeName(e.target.value)}
                />
              )}{' '}
            </td>
            <td>
              {' '}
              -Năm sinh:{' '}
              {save ? (
                motherWifeYear
              ) : (
                <input
                  className=''
                  type={'number'}
                  value={motherWifeYear}
                  onChange={(e) => setMotherWifeYear(e.target.value)}
                />
              )}{' '}
            </td>
          </tr>
          <tr>
            <td>
              {' '}
              Quê quán:{' '}
              {save ? (
                motherWifeCountry
              ) : (
                <input
                  className='w-3/4'
                  type={'text'}
                  value={motherWifeCountry}
                  onChange={(e) => setMotherWifeCountry(e.target.value)}
                />
              )}{' '}
            </td>
          </tr>
          <tr>
            <td>
              {' '}
              Nơi ở hiện nay:{' '}
              {save ? (
                motherWifePlace
              ) : (
                <input
                  className='w-3/4'
                  type={'text'}
                  value={motherWifePlace}
                  onChange={(e) => setMotherWifePlace(e.target.value)}
                />
              )}{' '}
            </td>
          </tr>
          <tr>
            <td>
              {' '}
              Nghề nghiệp:{' '}
              {save ? (
                motherWifeJob
              ) : (
                <input
                  className='w-3/4'
                  type={'text'}
                  value={motherWifeJob}
                  onChange={(e) => setMotherWifeJob(e.target.value)}
                />
              )}{' '}
            </td>
          </tr>
          <tr>
            <td>
              <b>-Vợ:</b>{' '}
              {save ? (
                wifeName
              ) : (
                <input
                  className=''
                  type={'text'}
                  value={wifeName}
                  onChange={(e) => setWifeName(e.target.value)}
                />
              )}{' '}
            </td>
            <td>
              {' '}
              Năm sinh:{' '}
              {save ? (
                wifeYear
              ) : (
                <input
                  className=''
                  type={'number'}
                  value={wifeYear}
                  onChange={(e) => setWifeYear(e.target.value)}
                />
              )}{' '}
            </td>
          </tr>
          <tr>
            <td>
              {' '}
              Quê quán:{' '}
              {save ? (
                wifeCountry
              ) : (
                <input
                  className='w-3/4'
                  type={'text'}
                  value={wifeCountry}
                  onChange={(e) => setWifeCountry(e.target.value)}
                />
              )}{' '}
            </td>
          </tr>
          <tr>
            <td>
              {' '}
              Nơi ở hiện nay:{' '}
              {save ? (
                wifePlace
              ) : (
                <input
                  className='w-3/4'
                  type={'text'}
                  value={wifePlace}
                  onChange={(e) => setWifePlace(e.target.value)}
                />
              )}{' '}
            </td>
          </tr>
          <tr>
            <td>
              {' '}
              Nghề nghiệp:{' '}
              {save ? (
                wifeJob
              ) : (
                <input
                  className='w-3/4'
                  type={'text'}
                  value={wifeJob}
                  onChange={(e) => setWifeJob(e.target.value)}
                />
              )}{' '}
            </td>
          </tr>
          <tr>
            <td>Các con:</td>
            <td className='flex items-start gap-2'>
              {' '}
              {save
                ? wifeChildName.map((child, index) => {
                    return (
                      <td>
                        {child}
                        {child.toString().trim() !== '' && '-Năm sinh:'}{' '}
                        {wiffeChildYear[index]}
                      </td>
                    );
                  })
                : wifeChildName.map((child, index) => {
                    return (
                      <td>
                        <input
                          value={child}
                          onChange={(e) => {
                            const copy = [...wifeChildName];
                            copy[index] = e.target.value;
                            setWifeChildName((prev) => [...copy]);
                          }}
                          type={'text'}
                        />
                        {index !== wifeChildName.length - 1 ? '-Năm sinh:' : ''}
                        {
                          <input
                            value={wiffeChildYear[index]}
                            onChange={(e) => {
                              const copy = [...wiffeChildYear];
                              copy[index] = e.target.value;
                              setWifeChildYear((prev) => [...copy]);
                            }}
                            type={'text'}
                          />
                        }
                        {index !== wifeChildName.length - 1 ? '-Năm sinh:' : ''}
                      </td>
                    );
                  })}
            </td>
            <td></td>
          </tr>

          <tr>
            <td>
              <b>II. THẨM TRA, XÁC MINH</b>
            </td>
          </tr>
          <tr>
            <td colSpan={2} style={{ whiteSpace: 'pre-line' }}>
              {save ? (
                identify
              ) : (
                <textarea
                  rows={6}
                  className='w-full'
                  type={'text'}
                  value={identify}
                  onChange={(e) => setIndentify(e.target.value)}
                ></textarea>
              )}{' '}
            </td>
          </tr>
          {/* <tr>
            <td colSpan={2}>
              {' '}
              - Ngày 05/10/2022, xác minh tại Đảng Ủy xã Thanh Hương, Thanh
              Liêm, Hà Nam: Là quê của mẹ vợ quần chúng{' '}
            </td>
          </tr>
          <tr>
            <td colSpan={2}>
              - Ngày 07/10/2022, xác minh tại Đảng Ủy phường Định Công, Hoàng
              Mai, Hà Nội: Là nơi cư trú của quần chúng cùng vợ con từ năm
              2016-2019.
            </td>
          </tr>
          <tr>
            <td colSpan={2}>
              - Ngày 10/10/2022, xác minh tại Đảng Ủy xã Lê Hồ, Kim Bảng, Hà
              Nam: Là quê của bố mẹ đẻ và là nơi ở hiện nay của mẹ đẻ{' '}
            </td>
          </tr>
          <tr>
            <td colSpan={2}>
              - Ngày 12/10/2022, xác minh tại Đảng Ủy xã Tứ Hiệp, Thanh Trì,Hà
              Nội: Là nơi cư trú hiện nay của quần chúng và vợ, con{' '}
            </td>
          </tr>
          <tr>
            <td colSpan={2}>
              - Ngày 17/10/2022, Chi bộ Tạp chí Văn hóa Doanh nghiệp Việt Nam
              xác nhận bản lý lịch đã khai đúng sự thật, không có vấn đề về lịch
              sử chính trị và chính trị hiện nay. Quần chúng có phẩm chất đạo
              đức, lối sống tốt, luôn hoàn thành tốt nhiệm vụ được giao.{' '}
            </td>
          </tr>
          <tr>
            <td colSpan={2}>
              - Ngày 30/11/2022, Đảng ủy khối Doanh nghiệp quận Thanh Xuân xác
              nhận bản lý lịch đã khai đúng sự thật, không có vấn đề về lịch sử
              chính trị và chính trị hiện nay. Quần chúng có phẩm chất đạo đức,
              lối sống tốt; đủ điều kiện để xem xét kết nạp vào Đảng.{' '}
            </td>
          </tr> */}
          <tr>
            <td>
              <b>III. QUY TRÌNH XÉT DUYỆT</b>
            </td>
          </tr>
          <tr>
            <td colSpan={2}>
              <b>
                1. Trung tâm Chính trị quận Đống Đa cấp Giấy chứng nhận học lớp
                nhận thức về Đảng ngày 21/12/2018.
              </b>
            </td>
          </tr>
          <tr>
            <td colSpan={2}>
              <b>2. Quần chúng viết đơn xin vào Đảng ngày 06/9/2022.</b>
            </td>
          </tr>
          <tr>
            <td colSpan={2}>
              <b>3. Đảng viên giới thiệu người vào Đảng ngày 25/10/2022:</b>
            </td>
          </tr>
          {introPeople.map((per, index) => {
            return (
              <tr>
                <td colSpan={2}>
                  {save ? (
                    per
                  ) : (
                    <input
                      type={'text'}
                      className='w-1/2'
                      value={per}
                      onChange={(e) => {
                        const copy = [...introPeople];
                        copy[index] = e.target.value;
                        setIntroPeople(copy);
                      }}
                    />
                  )}
                </td>
              </tr>
            );
          })}
          {/* <tr>
            <td colSpan={2}>- Đ/c Lê Thé Quang, SN 1951, Phó Bí thư Chi bộ.</td>
          </tr> */}
          <tr>
            <td colSpan={2}>
              <b>
                4. Tổng hợp ý kiến nhận xét các tổ chức đoàn thể, ngày
                04/11/2022:
              </b>
            </td>
          </tr>
          <tr>
            <td colSpan={2}>
              Số người dự:{' '}
              {save ? (
                peopleJoin
              ) : (
                <input
                  type={'number'}
                  min={0}
                  value={peopleJoin}
                  onChange={(e) => setPeopleJoin(e.target.value)}
                />
              )}{' '}
              đ/c{' '}
              <span style={{ padding: '0 20px' }}>
                Vắng{' '}
                {save ? (
                  peopleOff
                ) : (
                  <input
                    type={'number'}
                    min={0}
                    value={peopleOff}
                    onChange={(e) => setPeopleOff(e.target.value)}
                  />
                )}{' '}
                đ/c
              </span>{' '}
              <span style={{ padding: '0 20px' }}>
                Biểu quyết{' '}
                {save ? (
                  votePeople
                ) : (
                  <input
                    type={'number'}
                    value={votePeople}
                    onChange={(e) => setVotePeople(e.target.value)}
                  />
                )}
                /{peopleJoin} đc
              </span>
            </td>
          </tr>
          <tr>
            <td colSpan={2}>
              <b>
                {' '}
                5. Nghị quyết số 06-NQ/CB của Chi bộ tạp chí Văn hóa Doanh
                nghiệp ngày 04/11/2022:
              </b>
            </td>
          </tr>
          <tr>
            <td colSpan={2}>
              Tổng số đảng viên:{' '}
              {save ? (
                partyMem
              ) : (
                <input
                  type={'number'}
                  min={0}
                  value={partyMem}
                  onChange={(e) => {
                    setPartyMem(e.target.value);
                  }}
                />
              )}
              đ/c; trong đó: dự bị:{' '}
              {save ? (
                temPeople
              ) : (
                <input
                  type={'number'}
                  min={0}
                  value={temPeople}
                  onChange={(e) => {
                    setTemPeople(e.target.value);
                  }}
                />
              )}{' '}
              đ/c; có mặt{' '}
              {save ? (
                partyIn
              ) : (
                <input
                  type={'number'}
                  min={0}
                  value={partyIn}
                  onChange={(e) => {
                    setPartyIn(e.target.value);
                  }}
                />
              )}{' '}
              đ/c; vắng{' '}
              {save ? (
                partyOut
              ) : (
                <input
                  type={'number'}
                  min={0}
                  value={partyOut}
                  onChange={(e) => {
                    setPartyOut(e.target.value);
                  }}
                />
              )}{' '}
              đ/c Biểu quyết đồng ý:{' '}
              {save ? (
                officialPeo
              ) : (
                <input
                  type={'text'}
                  min={0}
                  value={officialPeo}
                  onChange={(e) => {
                    setOfficalPeo(e.target.value);
                  }}
                />
              )}{' '}
            </td>
          </tr>
          <tr>
            <td colSpan={2}>
              <b>
                {' '}
                6. Nghị quyết số 553-NQ/ĐU của Đảng ủy Khối Doanh nghiệp quận,
                ngày 30/11/2022:
              </b>
            </td>
          </tr>
          <tr>
            <td colSpan={2}>
              <b>
                Tổng số cấp ủy viên:{' '}
                {save ? (
                  temIn
                ) : (
                  <input
                    type={'text'}
                    min={0}
                    value={temIn}
                    onChange={(e) => {
                      setTemIn(e.target.value);
                    }}
                  />
                )}{' '}
                đ/c; có mặt{' '}
                {save ? (
                  hightJoin
                ) : (
                  <input
                    type={'number'}
                    min={0}
                    value={hightJoin}
                    onChange={(e) => {
                      setHighJoin(e.target.value);
                    }}
                  />
                )}{' '}
                đ/c; vắng{' '}
                {save ? (
                  hightOff
                ) : (
                  <input
                    type={'number'}
                    min={0}
                    value={hightOff}
                    onChange={(e) => {
                      setHighOff(e.target.value);
                    }}
                  />
                )}{' '}
                đ/c{' '}
              </b>
            </td>
          </tr>
          <tr>
            <td colSpan={2}>
              Biểu quyết nhất trí đề nghị kết nạp:{' '}
              {save ? (
                vote
              ) : (
                <input
                  type={'text'}
                  value={vote}
                  onChange={(e) => {
                    setVote(e.target.value);
                  }}
                />
              )}{' '}
              đ/c
            </td>
          </tr>
          <tr>
            <td colSpan={2}>
              7. Những vấn đề cần giải trình:{' '}
              {save ? (
                explain
              ) : (
                <input
                  type={'text'}
                  value={explain}
                  onChange={(e) => {
                    setExplain(e.target.value);
                  }}
                />
              )}{' '}
            </td>
          </tr>
          <tr>
            <td colSpan={2}>
              <b>* Ý kiến đề xuất của Ban Tổ chức</b>
            </td>
          </tr>
          <tr>
            <td colSpan={2}>
              Căn cứ Điều lệ Đảng, căn cứ các văn bản hướng dẫn của Trung ương.
              Thành ủy và sau khi thẩm định, Ban Tổ chức đề xuất với Ban Thường
              vụ quận ủy:
            </td>
          </tr>
          <tr>
            <td colSpan={2}>
              Đề nghị kết nạp:{' '}
              {save &&
                (yes.toString().trim() !== '' ? (
                  <span className='border inline-block border-black'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      strokeWidth={1.5}
                      stroke='currentColor'
                      className='w-6 h-6'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M6 18L18 6M6 6l12 12'
                      />
                    </svg>
                  </span>
                ) : (
                  <span className='p-2 h-7 w-7 inline-block border border-black'></span>
                ))}
              {!save && (
                <input
                  className='w-7'
                  minLength={1}
                  maxLength={1}
                  type={'text'}
                  value={yes}
                  onChange={(e) => {
                    if (no.toString().trim() !== '') {
                      setYes('');
                    } else {
                      setYes(e.target.value);
                    }
                  }}
                />
              )}{' '}
              Trả lại hồ sơ để bổ sung{' '}
              {save &&
                (no.toString().trim() !== '' ? (
                  <span className='border inline-block border-black'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      strokeWidth={1.5}
                      stroke='currentColor'
                      className='w-6 h-6'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M6 18L18 6M6 6l12 12'
                      />
                    </svg>
                  </span>
                ) : (
                  <span className='p-2 border inline-block w-7 h-7 border-black'></span>
                ))}
              {!save && (
                <input
                  className='w-7'
                  minLength={1}
                  maxLength={1}
                  type={'text'}
                  value={no}
                  onChange={(e) => {
                    if (no.toString().trim() !== '') {
                      setNo('');
                    } else {
                      setNo(e.target.value);
                    }
                  }}
                />
              )}{' '}
              Không kết nạp (ghi rõ lý do)
            </td>
          </tr>
          <tr>
            <td colSpan={2}>
              Hồ sơ đủ điều kiện để kết nạp đảng: Lý lịch rõ ràng, bản thân và
              gia đình luôn chấp hành tốt chủ trương, chính sách của Đảng, pháp
              luật của Nhà nước, các quy định của địa phương nơi cư trú và cơ
              quan nơi làm việc; không vi phạm quy định 58-QĐ/TW, ngày
              08/02/2022 của Bộ Chính trị. Bản thân có phẩm chất đạo đức tốt,
              sống gương mẫu, lối sống lành mạnh, nhiệt tình với công tác, luôn
              hoàn tốt nhiệm vụ được giao.
            </td>
          </tr>
          <tr>
            <td
              style={{ padding: '0 55px', whiteSpace: 'pre-line' }}
              className={'flex items-start'}
              colSpan={2}
            >
              <span>Ý KIẾN CỦA BAN THƯỜNG VỤ:</span>
              {save ? (
                comment
              ) : (
                <textarea
                  rows={8}
                  className='w-[500px]'
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                ></textarea>
              )}{' '}
              {save && comment === '' && '.......................'}
            </td>
          </tr>
          <tr>
            <td style={{ padding: '0 60px' }}>CÁN BỘ TRÍCH SAO</td>
            <td style={{ padding: '0 60px', textAlign: 'center' }}>
              <b> K/T TRƯỞNG BAN PHÓ TRƯỞNG BAN </b>
            </td>
          </tr>
          <br />
          <br />
          <br />
          <tr>
            <td style={{ padding: '0 70px' }}>
              <b>Bùi Phương Linh</b>
            </td>
            <td style={{ padding: '0 70px', textAlign: 'center' }}>
              <b>Nguyễn Thu Hà</b>
            </td>
          </tr>
        </tbody>
      </table>

      <div className='text-center'>
        <button
          onClick={() => ExportToWord('content')}
          type='button'
          className='border  border-indigo-500 bg-indigo-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-indigo-600 focus:outline-none focus:shadow-outline'
        >
          Export
        </button>
        <button
          onClick={() => {
            setSave(!save);
          }}
          type='button'
          className='border border-green-500 bg-green-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-green-600 focus:outline-none focus:shadow-outline'
        >
          {save ? 'Edit' : 'Save'}
        </button>
        <button
          type='button'
          onClick={() => {
            if (save) {
              myPrint('content');
            } else {
              alert('Hãy ấn nút save trước khi tiến hành in');
            }
          }}
          className='border border-green-500 bg-green-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-green-600 focus:outline-none focus:shadow-outline'
        >
          Print
        </button>
      </div>
    </div>
  );
}

export default App;
