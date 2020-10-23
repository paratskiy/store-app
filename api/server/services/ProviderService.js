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
      const providerToUpdate = await database.Provider.findByPk(id);

      if (providerToUpdate) {
        await providerToUpdate.update(updateProvider)
        
        return updateProvider;
      }
      return null;
    } catch (error) {
      throw error;
    }
  }

  static async getAProvider(id) {
    try {
      const theProvider = await database.Provider.findByPk(id);

      return theProvider;
    } catch (error) {
      throw error;
    }
  }

  static async deleteProvider(id) {
    try {
      const providerToDelete = await database.Provider.findByPk(id);

      if (providerToDelete) {
        await providerToDelete.destroy()

        return deletedProvider;
      }
      return null;
    } catch (error) {
      throw error;
    }
  }

  static async getProviderProducts(id) {
    try {
      return database.Provider.findByPk(id, { include: ['products'] })
        .then((findProvider) => {
          return findProvider.get().products
        })
    } catch (error) {
      throw error;
    }
  }
}

export default ProviderService;