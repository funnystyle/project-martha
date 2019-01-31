import responsives from "./db";

class Responsives {
  constructor(responsives) {
    this._responsives = responsives;
  }

  getResponsives() {
    return this._responsives;
  }

  getById(id) {
    return this._responsives.filter(responsive => responsive.id === id)[0];
  }

  findByQuery(query) {
    console.log(query);
    return !query || query === ""
      ? this.getResponsives()
      : this._responsives.filter(
          responsive => responsive.contents.filter(line => line.text.includes(query)).length > 0
        );
  }
}

export default new Responsives(responsives);

// export const deleteResponsive = id => {
//   const cleanedResponsives = responsives.filter(
//     responsive => responsive.id !== id
//   );
//   if (responsives.length > cleanedResponsives.length) {
//     responsives = cleanedResponsives;
//     return true;
//   } else {
//     return false;
//   }
// };

// export const addResponsive = (name, score) => {
//   const newResponsive = {
//     id: `${responsives.length + 1}`,
//     name,
//     score
//   }
//   responsives.push(newResponsive);
//   return newResponsive;
// }
