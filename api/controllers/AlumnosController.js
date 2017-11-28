/**
 * AlumnosController
 *
 * @description :: Server-side logic for managing alumnos
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    seeform: function(req, res) {
        console.log('entre a alumnos');
        res.view('alumnos');
    },
    addalumnos: function(req, res) {
        var escolar = {
            nombre: req.param('nombre'),
            apellido: req.param('apellido'),
            edad: req.param('edad'),
            promedio: req.param('promedio'),
        }
        alumno.agregar(escolar, function(err, user) {
            if (err) {
                return redirect('500');
            }
            res.redirect('user')
        })
    }


};