'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

const { parseMultipartData, sanitizeEntity } = require('strapi-utils');

module.exports = {
  /**
   * Create a record.
   *
   * @return {Object}
   */

  async create(ctx) {
    console.log(ctx.request.body)
    let entity = await strapi.services.projects.create(ctx.request.body);

    return sanitizeEntity(entity, { model: strapi.models.projects });
  },
};
