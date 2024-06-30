const fs = require('fs');
const path = require('path');

function isAllowedFileType(file) {
  const allowedTypes = ['image/jpeg', 'image/png', 'image/gif'];
  return allowedTypes.includes(file.mimetype);
}

module.exports = (hostingDir) => ({
  getHomePage: (req, res) => {
    let querySQL = 'SELECT m.*, c.name AS country_name, (@rownum := @rownum + 1) AS row_num FROM meat m JOIN country c ON m.country_id = c.id, (SELECT @rownum := 0) r ORDER BY m.id';

    db.query(querySQL, (err, result) => {
      if (err) {
        console.log(err.message);
        return res.status(500).send(`<h1>ERROR: ${err.message} \nwhile performing \n${querySQL}</h1>`);
      }

      res.render('meat.ejs', {
        title: 'Meaty',
        meat: result,
        hostingDir: hostingDir
      });
    });
  },

  getAddPage: (req, res) => {
    let querySQL = 'SELECT * FROM country';

    db.query(querySQL, (err, result) => {
      if (err) {
        console.log(err.message);
        return res.status(500).send(`<h1>ERROR: ${err.message} \nwhile performing \n${querySQL}</h1>`);
      }

      res.render('add-meat.ejs', {
        title: 'Add Meat',
        countries: result,
        message: '',
        hostingDir: hostingDir
      });
    });
  },

  postAddPage: (req, res) => {
    const { name, country_id, meat_type, calories_per_100g, description, cooking_time_min } = req.body;
    const image = req.files ? req.files.image : null;

    if (image && !isAllowedFileType(image)) {
      let querySQL = 'SELECT * FROM country';
      db.query(querySQL, (err, countries) => {
        if (err) {
          console.log(err.message);
          return res.status(500).send(`<h1>ERROR: ${err.message} \nwhile performing \n${querySQL}</h1>`);
        }
        return res.render('add-meat.ejs', {
          title: 'Add Meat',
          countries: countries,
          message: 'Invalid file type. Only JPEG, PNG, and GIF images are allowed.',
          hostingDir: hostingDir
        });
      });
    } else {
      let querySQL = 'INSERT INTO meat (name, country_id, image, calories_per_100g, cooking_time_min, description, meat_type) VALUES (?, ?, ?, ?, ?, ?, ?)';

      db.query(querySQL, [name, country_id, image ? image.name : '', calories_per_100g, cooking_time_min, description, meat_type], (err, result) => {
        if (err) {
          console.log(err.message);
          return res.status(500).send(`<h1>ERROR: ${err.message} \nwhile performing \n${querySQL}</h1>`);
        }

        if (image) {
          image.mv(path.join(__dirname, '..', 'static', 'assets', 'img', image.name), (err) => {
            if (err) {
              console.log(err.message);
            }
          });
        }

        res.redirect(hostingDir + '/');
      });
    }
  },

  getEditPage: (req, res) => {
    const meatId = req.params.id;

    let querySQL = 'SELECT * FROM meat WHERE id = ?';

    db.query(querySQL, [meatId], (err, meatResult) => {
      if (err) {
        console.log(err.message);
        return res.status(500).send(`<h1>ERROR: ${err.message} \nwhile performing \n${querySQL}</h1>`);
      }

      querySQL = 'SELECT * FROM country';

      db.query(querySQL, (err, countryResult) => {
        if (err) {
          console.log(err.message);
          return res.status(500).send(`<h1>ERROR: ${err.message} \nwhile performing \n${querySQL}</h1>`);
        }

        res.render('edit-meat.ejs', {
          title: 'Edit Meat',
          meat: meatResult[0],
          countries: countryResult,
          message: '',
          hostingDir: hostingDir
        });
      });
    });
  },

  postEditPage: (req, res) => {
    const meatId = req.params.id;
    const { name, country_id, meat_type, calories_per_100g, description, cooking_time_min } = req.body;
    const image = req.files ? req.files.image : null;

    if (image && !isAllowedFileType(image)) {
      let querySQL = 'SELECT * FROM meat WHERE id = ?';
      db.query(querySQL, [meatId], (err, meatResult) => {
        if (err) {
          console.log(err.message);
          return res.status(500).send(`<h1>ERROR: ${err.message} \nwhile performing \n${querySQL}</h1>`);
        }

        querySQL = 'SELECT * FROM country';
        db.query(querySQL, (err, countryResult) => {
          if (err) {
            console.log(err.message);
            return res.status(500).send(`<h1>ERROR: ${err.message} \nwhile performing \n${querySQL}</h1>`);
          }

          return res.render('edit-meat.ejs', {
            title: 'Edit Meat',
            meat: meatResult[0],
            countries: countryResult,
            message: 'Invalid file type. Only JPEG, PNG, and GIF images are allowed.',
            hostingDir: hostingDir
          });
        });
      });
    } else {
      let querySQL = 'UPDATE meat SET name = ?, country_id = ?, image = ?, calories_per_100g = ?, cooking_time_min = ?, description = ?, meat_type = ? WHERE id = ?';

      db.query(querySQL, [name, country_id, image ? image.name : '', calories_per_100g, cooking_time_min, description, meat_type, meatId], (err, result) => {
        if (err) {
          console.log(err.message);
          return res.status(500).send(`<h1>ERROR: ${err.message} \nwhile performing \n${querySQL}</h1>`);
        }

        if (image) {
          image.mv(path.join(__dirname, '..', 'static', 'assets', 'img', image.name), (err) => {
            if (err) {
              console.log(err.message);
            }
          });
        }

        res.redirect(hostingDir + '/');
      });
    }
  },

  getDeletePage: (req, res) => {
    const meatId = req.params.id;
  
    let querySQL = 'DELETE FROM meat WHERE id = ?';
  
    db.query(querySQL, [meatId], (err, result) => {
      if (err) {
        console.log(err.message);
        return res.status(500).send(`<h1>ERROR: ${err.message} \nwhile performing \n${querySQL}</h1>`);
      }
  
      // Renumber the id values sequentially
      querySQL = 'SET @count = 0;';
  
      db.query(querySQL, (err, result) => {
        if (err) {
          console.log(err.message);
          return res.status(500).send(`<h1>ERROR: ${err.message} \nwhile performing \n${querySQL}</h1>`);
        }
  
        querySQL = 'UPDATE meat SET id = (@count:= @count + 1) ORDER BY id;';
  
        db.query(querySQL, (err, result) => {
          if (err) {
            console.log(err.message);
            return res.status(500).send(`<h1>ERROR: ${err.message} \nwhile performing \n${querySQL}</h1>`);
          }
  
          // Reset the auto-increment value to the maximum id
          querySQL = 'SELECT MAX(id) AS max_id FROM meat';
  
          db.query(querySQL, (err, result) => {
            if (err) {
              console.log(err.message);
              return res.status(500).send(`<h1>ERROR: ${err.message} \nwhile performing \n${querySQL}</h1>`);
            }
  
            const maxId = result[0].max_id || 0;
  
            querySQL = 'ALTER TABLE meat AUTO_INCREMENT = ?';
  
            db.query(querySQL, [maxId + 1], (err, result) => {
              if (err) {
                console.log(err.message);
                return res.status(500).send(`<h1>ERROR: ${err.message} \nwhile performing \n${querySQL}</h1>`);
              }
  
              res.redirect(hostingDir + '/');
            });
          });
        });
      });
    });
  }
});