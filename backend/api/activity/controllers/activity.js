'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

const { parseMultipartData, sanitizeEntity } = require('strapi-utils');

module.exports = {
  // GET /activities/hello
  async hello(ctx) {
    return 'Hello World!';
  },

  /**
   * Create a record.
   *
   * @return {Object}
   */

  async create(ctx) {
    let entity = await strapi.services.activity.create(ctx.request.body);
    const project = await strapi.services.projects.updateProjectValues(ctx);
    console.log(project);
    entity.project = project;
    return sanitizeEntity(entity, { model: strapi.models.activity });
  },

  /**
   * Update a record.
   *
   * @return {Object}
   */

  async update(ctx) {
    const { id } = ctx.params;

    // TODO: Implement calculations to get the profit from collaborations
    ctx.request.body.costActivity = 500.00

    let entity = await strapi.services.activity.update({ id }, ctx.request.body);

    return sanitizeEntity(entity, { model: strapi.models.activity });
  },

  /**
   * Delete a record.
   *
   * @return {Object}
   */

  async delete(ctx) {
    const { id } = ctx.params;
    // TODO: Implement calculations, ammounts to update projectDuration

    const entity = await strapi.services.activity.delete({ id });
    return sanitizeEntity(entity, { model: strapi.models.activity });
  },
};
