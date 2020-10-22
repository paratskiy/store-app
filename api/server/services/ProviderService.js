import database from '../src/models';

class ProviderService {
  static async getAllProviders() {
    try {
      return await database.Provider.findAll();
    } catch (error) {
      throw error;
    }
  }

  static async addProvider(newProvider) {
    try {
      return await database.Provider.create(newProvider);
    } catch (error) {
      throw error;
    }
  }

  static async updateProvider(id, updateProvider) {
    try {
      const providerToUpdate = await database.Provider.findOne({
        where: { id: Number(id) }
      });

      if (providerToUpdate) {
        await database.Provider.update(updateProvider, { where: { id: Number(id) } });

        return updateProvider;
      }
      return null;
    } catch (error) {
      throw error;
    }
  }

  static async getAProvider(id) {
    try {
      const theProvider = await database.Provider.findOne({
        where: { id: Number(id) }
      });

      return theProvider;
    } catch (error) {
      throw error;
    }
  }

  static async deleteProvider(id) {
    try {
      const providerToDelete = await database.Provider.findOne({ where: { id: Number(id) } });

      if (providerToDelete) {
        const deletedProvider = await database.Provider.destroy({
          where: { id: Number(id) }
        });
        return deletedProvider;
      }
      return null;
    } catch (error) {
      throw error;
    }
  }
}

export default ProviderService;