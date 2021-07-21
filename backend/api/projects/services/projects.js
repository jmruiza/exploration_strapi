'use strict';
/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-services)
 * to customize this service
 */

const _ = require('lodash');

module.exports = {
  async updateProjectValues(ctx) {
    // Find project activities
    let projectId = ctx.request.body.project,
      activities = await strapi.query('activity').find({project: projectId});

    // Get sum for activities
    let durationDays = 0,
      durationMonths = 0,
      operationalCost = 0,
      collaboratorsCost = 0,
      profit = 0,
      taxISR = 0,
      subtotal = 0;

    _.map(activities, a => {
      durationDays += a.durationDays;
      collaboratorsCost += a.costActivity;
    })

    durationMonths = durationDays / 20;
    // TODO: Implement model for costs.category = 'operationalCost'
    operationalCost = 0 * durationMonths;
    subtotal = operationalCost + collaboratorsCost;
    // TODO: Implement model for costs.category = 'profit'
    profit = subtotal * 0.20;
    subtotal = subtotal * profit;
    // TODO: Implement model for costs.category = 'taxes'
    taxISR = subtotal * 0.30;
    subtotal = subtotal + taxISR;

    // Update values
    let data = {
      durationDays, durationMonths, collaboratorsCost, operationalCost, profit,
      taxISR, subtotal
    }
    const entry = await strapi.query('projects').update({ id: projectId }, data);

    return entry;
  }
};
