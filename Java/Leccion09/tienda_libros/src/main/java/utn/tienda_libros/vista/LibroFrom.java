package utn.tienda_libros.vista;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import utn.tienda_libros.servicio.LibroServicio;
import utn.tienda_libros.modelo.Libro;

import javax.swing.*;
import javax.swing.table.DefaultTableModel;
import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.awt.event.MouseAdapter;
import java.awt.event.MouseEvent;

@Component
public class LibroFrom extends JFrame {
    private LibroServicio libroServicio;
    private JPanel panel;
    private JTable tablaLibros;
    private JTextField idTexto;
    private JTextField libroTexto;
    private JTextField autorTexto;
    private JTextField precioTexto;
    private JTextField existenciasTexto;
    private JButton agregarButton;
    private JButton modificarButton;
    private JButton eliminarButton;
    private DefaultTableModel tablaModeloLibros;

    @Autowired
    public LibroFrom(LibroServicio libroServicio) {
        this.libroServicio = libroServicio;
        iniciarForma();
        agregarButton.addActionListener(e -> agregarLibro());
        tablaLibros.addMouseListener(new MouseAdapter() {
            @Override
            public void mouseClicked(MouseEvent e) {
                super.mouseClicked(e);
                cargarLibroSeleccionado();
            }
        });
        modificarButton.addActionListener(e -> modificarLibro());


        eliminarButton.addActionListener(e -> eliminarLibro());
    }

    private void iniciarForma() {
        setContentPane(panel);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setSize(900, 700);

        // Centrar la ventana en la pantalla
        Toolkit toolkit = Toolkit.getDefaultToolkit();
        Dimension tamanioPantalla = toolkit.getScreenSize();
        setLocation((tamanioPantalla.width - getWidth()) / 2, (tamanioPantalla.height - getHeight()) / 2);

        setVisible(true);
    }

    private void agregarLibro() {
        // Validar que el nombre del libro no esté vacío
        if (libroTexto.getText().equals("")) {
            mostrarMensaje("Ingresa el nombre del libro");
            libroTexto.requestFocusInWindow();
            return;
        }

        try {
            var nombreLibro = libroTexto.getText();
            var autor = autorTexto.getText();
            var precio = Double.parseDouble(precioTexto.getText());
            var existencias = Integer.parseInt(existenciasTexto.getText());

            var libro = new Libro();
            libro.setNombreLibro(nombreLibro);
            libro.setAutor(autor);
            libro.setPrecio(precio);
            libro.setExistencias(existencias);

            libroServicio.guardarLibro(libro);
            limpiarFormulario();
            listarLibros();
        } catch (NumberFormatException e) {
            mostrarMensaje("Precio o existencias no son válidos.");
        }
    }

    private void cargarLibroSeleccionado() {
        int renglon = tablaLibros.getSelectedRow();
        if (renglon != -1) {
            // Cargar datos del libro seleccionado
            idTexto.setText(tablaModeloLibros.getValueAt(renglon, 0).toString());
            libroTexto.setText(tablaModeloLibros.getValueAt(renglon, 1).toString());
            autorTexto.setText(tablaModeloLibros.getValueAt(renglon, 2).toString());
            precioTexto.setText(tablaModeloLibros.getValueAt(renglon, 3).toString());
            existenciasTexto.setText(tablaModeloLibros.getValueAt(renglon, 4).toString());
        }
    }

    private void modificarLibro() {
        // Validar que el nombre del libro no esté vacío
        if (idTexto.getText().equals("")) {
            mostrarMensaje("Ingresa el nombre del libro");
            libroTexto.requestFocusInWindow();
        }else if (idTexto.getText().equals("")) {
            mostrarMensaje("Digite el nombre del libro a modificar");
            libroTexto.requestFocusInWindow();
            return;
        }

        try {
            var id = Integer.parseInt(idTexto.getText());
            var nombreLibro = libroTexto.getText();
            var autor = autorTexto.getText();
            var precio = Double.parseDouble(precioTexto.getText());
            var existencias = Integer.parseInt(existenciasTexto.getText());

            var libro = new Libro();
            libro.setId(id);
            libro.setNombreLibro(nombreLibro);
            libro.setAutor(autor);
            libro.setPrecio(precio);
            libro.setExistencias(existencias);

            libroServicio.guardarLibro(libro);
            limpiarFormulario();
            listarLibros();
        } catch (NumberFormatException e) {
            mostrarMensaje("Precio o existencias no son válidos.");
        }
    }

    private void eliminarLibro() {
        // Validar que el nombre del libro no esté vacío
        if (idTexto.getText().equals("")) {
            mostrarMensaje("Digite el nombre del libro a eliminar");
            libroTexto.requestFocusInWindow();
            return;
        }

        try {
            var id = Integer.parseInt(idTexto.getText());
            var libro = libroServicio.buscarLibroPorId(id);
            if (libro != null) {
                libroServicio.eliminarLibro(libro);
                limpiarFormulario();
                listarLibros();
            } else {
                mostrarMensaje("El libro no existe.");
            }
        } catch (NumberFormatException e) {
            mostrarMensaje("ID no es válido.");
        }
    }
    private void limpiarFormulario() {
        libroTexto.setText("");
        autorTexto.setText("");
        precioTexto.setText("");
        existenciasTexto.setText("");
    }

    private void mostrarMensaje(String mensaje) {
        JOptionPane.showMessageDialog(this, mensaje);
    }

    private void createUIComponents() {
        // Crear campos de texto para el formulario
        idTexto = new JTextField();
        idTexto.setVisible(false);  // No mostrar el campo de ID
        libroTexto = new JTextField();
        autorTexto = new JTextField();
        precioTexto = new JTextField();
        existenciasTexto = new JTextField();

        // Crear y configurar el modelo de la tabla
        this.tablaModeloLibros = new DefaultTableModel(0, 5){
            @Override
            public boolean isCellEditable(int row, int column) {
                return false;
            }};
        String[] cabecera = {"Id", "Libro", "Autor", "Precio", "Stock"};
        this.tablaModeloLibros.setColumnIdentifiers(cabecera);

        // Crear el JTable
        this.tablaLibros = new JTable(this.tablaModeloLibros);
        this.tablaLibros.setSelectionMode(ListSelectionModel.SINGLE_SELECTION);

        // Listar los libros en la tabla
        listarLibros();
    }

    private void listarLibros() {
        this.tablaModeloLibros.setRowCount(0);  // Limpiar la tabla antes de llenarla
        var libros = libroServicio.listarLibros();  // Obtener libros desde el servicio
        libros.forEach(libro -> {
            // Agregar cada libro como una fila en la tabla
            Object[] renglonLibro = {libro.getId(), libro.getNombreLibro(), libro.getAutor(), libro.getPrecio(), libro.getExistencias()};
            this.tablaModeloLibros.addRow(renglonLibro);
        });
    }
}
