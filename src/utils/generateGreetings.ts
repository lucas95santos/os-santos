const dawnTimes = ['00', '01', '02', '03', '04', '05'];
const morningTimes = ['06', '07', '08', '09', '10', '11'];
const afternoonTimes = ['12', '13', '14', '15', '16', '17'];
const nightTimes = ['18', '19', '20', '21', '22', '23'];

const generatingGreetings = (time: string) => {
  const [hour] = time.split(':');

  if (dawnTimes.includes(hour)) return 'Boa madrugada';

  if (morningTimes.includes(hour)) return 'Bom dia';

  if (afternoonTimes.includes(hour)) return 'Boa tarde';

  if (nightTimes.includes(hour)) return 'Boa noite';
}

export default generatingGreetings;
