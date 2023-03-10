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
              <p>QU???N ???Y THANH XU??N</p>
              <p className='font-bold'>BAN T??? CH???C</p>
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
              ?????NG C???NG S???N VI???T NAM
            </td>
          </tr>
          <tr style={{ textAlign: 'right' }}>
            <td colSpan={'2'}>Thanh Xu??n, ng??y .... th??ng 12 n??m 2022</td>
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
              <p>TR??CH SAO</p>
              <p>H??? s?? ????? ngh??? k???t n???p ?????ng vi??n</p>
              <p>thu???c ?????ng b??? Kh???i Doanh nghi???p qu???n Thanh Xu??n</p>
              <p>-----</p>
            </td>
          </tr>
          <tr>
            <td colSpan={'2'} style={{ fontWeight: 'bold' }}>
              I.TH??NG TIN QU???N CH??NG
            </td>
          </tr>
          <tr>
            <td colSpan={'2'} style={{ fontWeight: 'bold' }}>
              1.S?? y???u l?? l???ch
            </td>
          </tr>
          <tr>
            <td>
              H??? v?? t??n ??ang d??ng:{' '}
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
                {/* Ho??ng V??n Quy???t */}
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
              H??? t??n khai sinh:{' '}
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
                {/* Ho??ng V??n Quy???t */}
              </b>
            </td>
            <td></td>
          </tr>
          <tr>
            <td>
              D??n t???c:
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
              T??n gi??o:{' '}
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
              Ng??y,th??ng,n??m sinh:
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
              N??i sinh:{' '}
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
              Qu?? qu??n:
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
              N??i c?? tr??:
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
              Tr??nh ????? v??n h??a:
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
              Chuy??t m??n:{' '}
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
              Ngh??? nghi???p
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
              <b>* Qu?? tr??nh c??ng t??c</b>
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
              T??? 2015-2018: Ph??ng vi??n T???p ch?? Th????ng tr?????ng
            </td>
          </tr>
          <tr>
            <td colSpan={'2'}>
              T??? 2019-2020: Bi??n t???p vi??n, ph???ng vi??n T???p ch?? Th??ng tin v?? ph??t
              tri???n
            </td>
          </tr>
          <tr>
            <td colSpan={'2'}>
              T??? 6/2020 ?????n nay: Ph??ng vi??n T???p ch?? v??n h??a doanh nghi???p Vi???t
              Nam
            </td>
          </tr> */}
          <tr>
            <td colSpan={'2'}>
              <b>*Khen th?????ng, k??? lu???t</b>
            </td>
          </tr>
          <tr>
            <td colSpan={'2'}>
              -Khen th?????ng:
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
              -K??? lu???t:{' '}
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
              <b>2. Ho??n c???nh gia ????nh</b>
            </td>
          </tr>
          <tr>
            <td>
              <b>- B??? ?????</b>:{' '}
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
              -N??m sinh:{' '}
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
              {save && fatherYearDie !== '' && <>m???t n??m {fatherYearDie}</>}
              {!save && (
                <>
                  m???t n??m{' '}
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
              Qu?? qu??n:
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
              N??i ??? tr?????c khi m???t:{' '}
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
              Ngh??? nghi???p tr?????c khi m???t:{' '}
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
              <b>- M??? ?????:</b>{' '}
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
              - N??m sinh:
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
              Qu?? qu??n:{' '}
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
              N??i ??? hi???n nay:{' '}
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
              Ngh??? nghi???p:{' '}
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
              <b> - Anh ch??? em ru???t:</b> Gia ????nh c??{' '}
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
              ch??? em
            </td>
          </tr>
          <tr>
            <td>
              {' '}
              <b>- B??? v???:</b>{' '}
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
              - N??m sinh:{' '}
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
              Qu?? qu??n:{' '}
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
              N??i ??? hi???n nay:{' '}
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
              Ngh??? nghi???p:{' '}
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
              <b>- M??? v???:</b>{' '}
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
              -N??m sinh:{' '}
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
              Qu?? qu??n:{' '}
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
              N??i ??? hi???n nay:{' '}
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
              Ngh??? nghi???p:{' '}
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
              <b>-V???:</b>{' '}
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
              N??m sinh:{' '}
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
              Qu?? qu??n:{' '}
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
              N??i ??? hi???n nay:{' '}
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
              Ngh??? nghi???p:{' '}
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
            <td>C??c con:</td>
            <td className='flex items-start gap-2'>
              {' '}
              {save
                ? wifeChildName.map((child, index) => {
                    return (
                      <td>
                        {child}
                        {child.toString().trim() !== '' && '-N??m sinh:'}{' '}
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
                        {index !== wifeChildName.length - 1 ? '-N??m sinh:' : ''}
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
                        {index !== wifeChildName.length - 1 ? '-N??m sinh:' : ''}
                      </td>
                    );
                  })}
            </td>
            <td></td>
          </tr>

          <tr>
            <td>
              <b>II. TH???M TRA, X??C MINH</b>
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
              - Ng??y 05/10/2022, x??c minh t???i ?????ng ???y x?? Thanh H????ng, Thanh
              Li??m, H?? Nam: L?? qu?? c???a m??? v??? qu???n ch??ng{' '}
            </td>
          </tr>
          <tr>
            <td colSpan={2}>
              - Ng??y 07/10/2022, x??c minh t???i ?????ng ???y ph?????ng ?????nh C??ng, Ho??ng
              Mai, H?? N???i: L?? n??i c?? tr?? c???a qu???n ch??ng c??ng v??? con t??? n??m
              2016-2019.
            </td>
          </tr>
          <tr>
            <td colSpan={2}>
              - Ng??y 10/10/2022, x??c minh t???i ?????ng ???y x?? L?? H???, Kim B???ng, H??
              Nam: L?? qu?? c???a b??? m??? ????? v?? l?? n??i ??? hi???n nay c???a m??? ?????{' '}
            </td>
          </tr>
          <tr>
            <td colSpan={2}>
              - Ng??y 12/10/2022, x??c minh t???i ?????ng ???y x?? T??? Hi???p, Thanh Tr??,H??
              N???i: L?? n??i c?? tr?? hi???n nay c???a qu???n ch??ng v?? v???, con{' '}
            </td>
          </tr>
          <tr>
            <td colSpan={2}>
              - Ng??y 17/10/2022, Chi b??? T???p ch?? V??n h??a Doanh nghi???p Vi???t Nam
              x??c nh???n b???n l?? l???ch ???? khai ????ng s??? th???t, kh??ng c?? v???n ????? v??? l???ch
              s??? ch??nh tr??? v?? ch??nh tr??? hi???n nay. Qu???n ch??ng c?? ph???m ch???t ?????o
              ?????c, l???i s???ng t???t, lu??n ho??n th??nh t???t nhi???m v??? ???????c giao.{' '}
            </td>
          </tr>
          <tr>
            <td colSpan={2}>
              - Ng??y 30/11/2022, ?????ng ???y kh???i Doanh nghi???p qu???n Thanh Xu??n x??c
              nh???n b???n l?? l???ch ???? khai ????ng s??? th???t, kh??ng c?? v???n ????? v??? l???ch s???
              ch??nh tr??? v?? ch??nh tr??? hi???n nay. Qu???n ch??ng c?? ph???m ch???t ?????o ?????c,
              l???i s???ng t???t; ????? ??i???u ki???n ????? xem x??t k???t n???p v??o ?????ng.{' '}
            </td>
          </tr> */}
          <tr>
            <td>
              <b>III. QUY TR??NH X??T DUY???T</b>
            </td>
          </tr>
          <tr>
            <td colSpan={2}>
              <b>
                1. Trung t??m Ch??nh tr??? qu???n ?????ng ??a c???p Gi???y ch???ng nh???n h???c l???p
                nh???n th???c v??? ?????ng ng??y 21/12/2018.
              </b>
            </td>
          </tr>
          <tr>
            <td colSpan={2}>
              <b>2. Qu???n ch??ng vi???t ????n xin v??o ?????ng ng??y 06/9/2022.</b>
            </td>
          </tr>
          <tr>
            <td colSpan={2}>
              <b>3. ?????ng vi??n gi???i thi???u ng?????i v??o ?????ng ng??y 25/10/2022:</b>
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
            <td colSpan={2}>- ??/c L?? Th?? Quang, SN 1951, Ph?? B?? th?? Chi b???.</td>
          </tr> */}
          <tr>
            <td colSpan={2}>
              <b>
                4. T???ng h???p ?? ki???n nh???n x??t c??c t??? ch???c ??o??n th???, ng??y
                04/11/2022:
              </b>
            </td>
          </tr>
          <tr>
            <td colSpan={2}>
              S??? ng?????i d???:{' '}
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
              ??/c{' '}
              <span style={{ padding: '0 20px' }}>
                V???ng{' '}
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
                ??/c
              </span>{' '}
              <span style={{ padding: '0 20px' }}>
                Bi???u quy???t{' '}
                {save ? (
                  votePeople
                ) : (
                  <input
                    type={'number'}
                    value={votePeople}
                    onChange={(e) => setVotePeople(e.target.value)}
                  />
                )}
                /{peopleJoin} ??c
              </span>
            </td>
          </tr>
          <tr>
            <td colSpan={2}>
              <b>
                {' '}
                5. Ngh??? quy???t s??? 06-NQ/CB c???a Chi b??? t???p ch?? V??n h??a Doanh
                nghi???p ng??y 04/11/2022:
              </b>
            </td>
          </tr>
          <tr>
            <td colSpan={2}>
              T???ng s??? ?????ng vi??n:{' '}
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
              ??/c; trong ????: d??? b???:{' '}
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
              ??/c; c?? m???t{' '}
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
              ??/c; v???ng{' '}
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
              ??/c Bi???u quy???t ?????ng ??:{' '}
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
                6. Ngh??? quy???t s??? 553-NQ/??U c???a ?????ng ???y Kh???i Doanh nghi???p qu???n,
                ng??y 30/11/2022:
              </b>
            </td>
          </tr>
          <tr>
            <td colSpan={2}>
              <b>
                T???ng s??? c???p ???y vi??n:{' '}
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
                ??/c; c?? m???t{' '}
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
                ??/c; v???ng{' '}
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
                ??/c{' '}
              </b>
            </td>
          </tr>
          <tr>
            <td colSpan={2}>
              Bi???u quy???t nh???t tr?? ????? ngh??? k???t n???p:{' '}
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
              ??/c
            </td>
          </tr>
          <tr>
            <td colSpan={2}>
              7. Nh???ng v???n ????? c???n gi???i tr??nh:{' '}
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
              <b>* ?? ki???n ????? xu???t c???a Ban T??? ch???c</b>
            </td>
          </tr>
          <tr>
            <td colSpan={2}>
              C??n c??? ??i???u l??? ?????ng, c??n c??? c??c v??n b???n h?????ng d???n c???a Trung ????ng.
              Th??nh ???y v?? sau khi th???m ?????nh, Ban T??? ch???c ????? xu???t v???i Ban Th?????ng
              v??? qu???n ???y:
            </td>
          </tr>
          <tr>
            <td colSpan={2}>
              ????? ngh??? k???t n???p:{' '}
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
              Tr??? l???i h??? s?? ????? b??? sung{' '}
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
              Kh??ng k???t n???p (ghi r?? l?? do)
            </td>
          </tr>
          <tr>
            <td colSpan={2}>
              H??? s?? ????? ??i???u ki???n ????? k???t n???p ?????ng: L?? l???ch r?? r??ng, b???n th??n v??
              gia ????nh lu??n ch???p h??nh t???t ch??? tr????ng, ch??nh s??ch c???a ?????ng, ph??p
              lu???t c???a Nh?? n?????c, c??c quy ?????nh c???a ?????a ph????ng n??i c?? tr?? v?? c??
              quan n??i l??m vi???c; kh??ng vi ph???m quy ?????nh 58-Q??/TW, ng??y
              08/02/2022 c???a B??? Ch??nh tr???. B???n th??n c?? ph???m ch???t ?????o ?????c t???t,
              s???ng g????ng m???u, l???i s???ng l??nh m???nh, nhi???t t??nh v???i c??ng t??c, lu??n
              ho??n t???t nhi???m v??? ???????c giao.
            </td>
          </tr>
          <tr>
            <td
              style={{ padding: '0 55px', whiteSpace: 'pre-line' }}
              className={'flex items-start'}
              colSpan={2}
            >
              <span>?? KI???N C???A BAN TH?????NG V???:</span>
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
            <td style={{ padding: '0 60px' }}>C??N B??? TR??CH SAO</td>
            <td style={{ padding: '0 60px', textAlign: 'center' }}>
              <b> K/T TR?????NG BAN PH?? TR?????NG BAN </b>
            </td>
          </tr>
          <br />
          <br />
          <br />
          <tr>
            <td style={{ padding: '0 70px' }}>
              <b>B??i Ph????ng Linh</b>
            </td>
            <td style={{ padding: '0 70px', textAlign: 'center' }}>
              <b>Nguy???n Thu H??</b>
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
              alert('H??y ???n n??t save tr?????c khi ti???n h??nh in');
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
