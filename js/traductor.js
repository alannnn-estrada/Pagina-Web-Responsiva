function traducirCoddevAJ() {
    var texto_es = document.getElementById('traducir_es').value;

    function traducirTextoEspecializado(texto) {
        var codigo_letra = {
            'B': 'V',
            'C': '|',
            'D': 'E',
            'E': '#',
            'F': '$',
            'G': '%',
            'H': '&',
            'I': '/',
            'J': 'K',
            'K': 'J',
            'L': '=',
            'M': 'T',
            'N': '\\',
            'Ñ': 'O',
            'O': '+',
            'P': '}',
            'Q': ']',
            'R': '[',
            'S': '{',
            'T': '-',
            'U': '_',
            'X': 'Y',
            'W': 'Z',
            'V': 'B',
            'Y': 'X',
            'Z': '@',
            'A': 'W'
        };

        var texto_traducido = '';

        for (var i = 0; i < texto.length; i++) {
            var caracter = texto[i].toUpperCase();

            if (codigo_letra.hasOwnProperty(caracter)) {
                texto_traducido += codigo_letra[caracter];
            } else {
                texto_traducido += caracter;
            }
        }

        return texto_traducido;
    }

    var texto_traducido = traducirTextoEspecializado(texto_es);
    document.getElementById('resultado_coddev').textContent = 'La traducción del texto de CODDEV-AJ es: ' + texto_traducido;
    document.getElementById('codigo_coddev').textContent = 'Código de traducción: ' + texto_traducido;
}

function traducirEspañolLatam() {
    var texto_coddev = document.getElementById('traducir_coddev').value;

    function traducirTextoNormal(texto) {
        var codigo_letra = {
            'V': 'B',
            '|': 'C',
            'E': 'D',
            '#': 'E',
            '$': 'F',
            '%': 'G',
            '&': 'H',
            '/': 'I',
            'K': 'J',
            'J': 'K',
            '=': 'L',
            'T': 'M',
            '\\': 'N',
            'O': 'Ñ',
            '+': 'O',
            '}': 'P',
            ']': 'Q',
            '[': 'R',
            '{': 'S',
            '-': 'T',
            '_': 'U',
            'Y': 'X',
            'Z': 'W',
            'B': 'V',
            'X': 'Y',
            '@': 'Z',
            'W': 'A'
        };

        var texto_traducido = '';

        for (var i = 0; i < texto.length; i++) {
            var caracter = texto[i];

            if (codigo_letra.hasOwnProperty(caracter)) {
                texto_traducido += codigo_letra[caracter];
            } else {
                texto_traducido += caracter;
            }
        }

        return texto_traducido;
    }

    var texto_traducido = traducirTextoNormal(texto_coddev);
    document.getElementById('resultado_es').textContent = 'La traducción del texto de ESPAÑOL LATAM es: ' + texto_traducido;
    document.getElementById('codigo_es').textContent = 'Código de traducción: ' + texto_traducido;
    mostrarCodigoTraduccion(texto_traducido, 'espanol');
}

function mostrarCodigoTraduccion(texto, tipo) {
    if (tipo === 'coddev') {
        document.getElementById('codigo_coddev').textContent = 'Código de traducción: ' + texto;
    } else if (tipo === 'espanol') {
        document.getElementById('codigo_es').textContent = 'Código de traducción: ' + texto;
    }
}

// Obtener los elementos de los campos de texto y agregar eventos de escucha
var inputTraducirCoddev = document.getElementById('traducir_coddev');
inputTraducirCoddev.addEventListener('input', traducirEspañolLatam);

var inputTraducirEs = document.getElementById('traducir_es');
inputTraducirEs.addEventListener('input', traducirCoddevAJ);
