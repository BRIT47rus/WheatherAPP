export async function loadAndUseData() {
  try {
    const response = await fetch('../../db.json');
    const dbData = await response.json();
    console.log(dbData.dataDetails);
    return dbData;
  } catch (error) {
    console.error('Ошибка загрузки JSON:', error);
    return '';
  }
}
