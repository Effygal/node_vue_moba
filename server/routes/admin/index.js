module.exports = app => {
    const express = require('express')
    const router = express.Router({
        mergeParams: true
    })
    //const Category = require('../../models/Category')
    router.post('/', async(req, res) => {
        const model = await req.Model.create(req.body)
        res.send(model)
    })
    router.put('/:id', async(req, res) => {
        const model = await req.Model.findByIdAndUpdate(req.params.id, req.body)
        res.send(model)
    })
    router.get('/', async(req, res) => {
        const queryOptions = {}
        
        if(req.Model.modelName === 'Category'){
            queryOptions.populate = 'parent'
        }
        
        const items = await req.Model.find().setOptions(queryOptions).limit(10)
        res.send(items)
    })
    router.get('/:id', async(req, res) => {
        const model = await req.Model.findById(req.params.id)
        res.send(model)
    })
    router.delete('/:id', async(req, res) => {
        const model = await req.Model.findByIdAndDelete(req.params.id)
        res.send({
            seccess: true
        })
    })
    app.use('/admin/api/rest/:resource',(req, res, next) => {
        //小写复数转大写单数
        const modelName = require('inflection').classify(req.params.resource)
        req.Model = require(`../../models/${modelName}`)

        next()
    } , router)
}